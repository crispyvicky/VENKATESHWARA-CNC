import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Payment } from "@/models/Payment";
import "@/models/Customer"; // register for populate
import { Job } from "@/models/Job";
import { Task } from "@/models/Task";

export async function GET() {
  await connectToDatabase();
  const list = await Payment.find().populate("customer job").sort({ createdAt: -1 }).lean();
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  await connectToDatabase();
  const doc = await Payment.create(body);

  // --- Update the Job paid/balance/status ---
  if (body.job && typeof body.amount === 'number') {
    const job = await Job.findById(body.job);
    if (job) {
      job.paid += body.amount;
      job.balance = Math.max(0, job.total - job.paid);
      if (job.paid >= job.total) {
        job.status = "completed";
        // ensure related tasks are finished when job completes
        try { await Task.updateMany({ job: job._id }, { status: "finished" }); } catch {}
      }
      await job.save();
    }
  }
  // --- END ---

  return NextResponse.json(doc, { status: 201 });
}


