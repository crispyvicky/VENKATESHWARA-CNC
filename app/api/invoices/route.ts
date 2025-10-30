import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Invoice } from "@/models/Invoice";

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
  const body = await req.json();
  await connectToDatabase();
  const doc = await Invoice.create(body);
  return NextResponse.json(doc, { status: 201 });
}


