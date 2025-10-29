import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Invoice } from "@/models/Invoice";
import PDFDocument from "pdfkit";

export const runtime = "nodejs";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await connectToDatabase();
  const invoice = await Invoice.findById(params.id).populate("customer jobs").lean();
  if (!invoice) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const doc = new PDFDocument({ size: "A4", margin: 50 });
  const chunks: Buffer[] = [];
  doc.on("data", (chunk) => chunks.push(chunk as Buffer));

  doc.fontSize(18).text("Venkateshwara CNC", { align: "left" });
  doc.moveDown(0.5);
  doc.fontSize(12).text("Hyderabad, India");
  doc.moveDown();

  doc.fontSize(16).text(`Invoice ${invoice.number}`, { align: "right" });
  doc.moveDown();

  doc.fontSize(12).text(`Bill To: ${invoice.customer?.name || "Customer"}`);
  if (invoice.customer?.phone) doc.text(`Phone: ${invoice.customer.phone}`);
  if (invoice.customer?.address) doc.text(`Address: ${invoice.customer.address}`);
  doc.moveDown();

  doc.fontSize(12).text("Items:");
  doc.moveDown(0.25);
  invoice.jobs?.forEach((job: any, idx: number) => {
    doc.text(`${idx + 1}. ${job.description}  x${job.quantity} @ ₹${job.rate}`);
  });
  doc.moveDown();

  doc.text(`Subtotal: ₹${invoice.subtotal}`);
  doc.text(`Discount: ₹${invoice.discount || 0}`);
  doc.text(`Total: ₹${invoice.total}`);
  doc.text(`Paid: ₹${invoice.paid}`);
  doc.text(`Balance: ₹${invoice.balance}`);

  doc.end();
  const buffer = await new Promise<Buffer>((resolve) => {
    doc.on("end", () => resolve(Buffer.concat(chunks)));
  });

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=${invoice.number}.pdf`,
    },
  });
}


