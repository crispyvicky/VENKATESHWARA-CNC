import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Invoice } from "@/models/Invoice";
import "@/models/Customer"; // register for populate
import "@/models/Job"; // register for populate
import { Job } from "@/models/Job";

export async function GET(req: NextRequest) {
  await connectToDatabase();
  const { searchParams } = new URL(req.url!);
  const jobId = searchParams.get("job");
  if (jobId) {
    const results = await Invoice.find({ jobs: jobId }).lean();
    return NextResponse.json(results);
  }
  const list = await Invoice.find().populate("customer jobs").sort({ createdAt: -1 }).lean();
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();

  try {
    const body = await req.json();
    const customer = body?.customer;
    const jobIds = Array.isArray(body?.jobs) ? body.jobs : [];
    const discount = Number(body?.discount || 0);

    if (!customer || jobIds.length === 0) {
      return NextResponse.json({ error: "customer and jobs are required" }, { status: 400 });
    }

    // Load jobs and compute totals server-side (don't trust client)
    const jobs = await Job.find({ _id: { $in: jobIds } }).lean();
    if (jobs.length === 0) {
      return NextResponse.json({ error: "No jobs found for invoice" }, { status: 400 });
    }
    const subtotal = jobs.reduce((sum: number, j: any) => sum + Number(j.total || 0), 0);
    const paid = jobs.reduce((sum: number, j: any) => sum + Number(j.paid || 0), 0);
    const total = Math.max(0, subtotal - discount);
    const balance = Math.max(0, total - paid);

    // Generate a unique invoice number
    let number: string;
    for (;;) {
      const rand = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
      number = `INV-${new Date().getFullYear()}-${rand}`;
      const exists = await Invoice.findOne({ number }).lean();
      if (!exists) break;
    }

    const doc = await Invoice.create({
      customer,
      jobs: jobIds,
      subtotal,
      discount,
      total,
      paid,
      balance,
      number,
      invoiceDate: new Date(),
    });

    return NextResponse.json(doc, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: "INVOICE_CREATE_FAILED", message: err?.message }, { status: 500 });
  }
}


