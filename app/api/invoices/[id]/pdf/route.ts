import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Invoice } from "@/models/Invoice";
import "@/models/Customer"; // register for populate
import "@/models/Job"; // register for populate
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
// using buffered response for Next.js compatibility

export const runtime = "nodejs";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await connectToDatabase();
    const invoice = await Invoice.findById(params.id).populate("customer jobs").lean();
    if (!invoice) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const safeNumber = (invoice as any).number || `INV-${new Date().getFullYear()}-${params.id.slice(-6)}`;

    // Create PDF with pdf-lib (no external font files needed)
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4 in points

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const { width, height } = page.getSize();

    let cursorY = height - 50;

    const drawText = (text: string, size = 12, x = 50, color = rgb(0, 0, 0)) => {
      page.drawText(String(text), { x, y: cursorY, size, font, color });
      cursorY -= size + 6;
    };

    // Header
    drawText("Venkateshwara CNC", 18, 50);
    drawText("Hyderabad, India", 12, 50);
    page.drawText(`Invoice ${safeNumber}`, { x: width - 200, y: height - 50, size: 14, font, color: rgb(0, 0, 0) });
    cursorY -= 10;

    const customer: any = (invoice as any).customer || {};
    drawText(`Bill To: ${customer.name || "Customer"}`);
    if (customer.phone) drawText(`Phone: ${customer.phone}`);
    if (customer.address) drawText(`Address: ${customer.address}`);
    cursorY -= 6;

    drawText("Items:");
    const jobs: any[] = (invoice as any).jobs || [];
    jobs.forEach((job: any, idx: number) => {
      const desc = job?.description ?? "Job";
      const qty = job?.quantity ?? 1;
      const rate = job?.rate ?? 0;
      drawText(`${idx + 1}. ${desc}  x${qty} @ Rs.${rate}`);
    });

    const subtotal = (invoice as any).subtotal ?? 0;
    const discount = (invoice as any).discount ?? 0;
    const total = (invoice as any).total ?? subtotal - discount;
    const paid = (invoice as any).paid ?? 0;
    const balance = (invoice as any).balance ?? Math.max(0, total - paid);

    cursorY -= 4;
    drawText(`Subtotal: Rs.${subtotal}`);
    drawText(`Discount: Rs.${discount}`);
    drawText(`Total: Rs.${total}`);
    drawText(`Paid: Rs.${paid}`);
    drawText(`Balance: Rs.${balance}`);

    const bytesArray = await pdfDoc.save();
    const buffer = Buffer.from(bytesArray);
    const bytes = new Uint8Array(buffer);

    return new NextResponse(bytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=${safeNumber}.pdf`,
        "Content-Length": String(buffer.length),
      },
    });
  } catch (err: any) {
    console.error("PDF generation failed:", err);
    return NextResponse.json({ error: "PDF_ERROR", message: err?.message || "Failed to generate PDF" }, { status: 500 });
  }
}


