import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Job } from "@/models/Job";

export async function GET() {
  await connectToDatabase();
  const list = await Job.find().populate("customer").sort({ createdAt: -1 }).lean();
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  await connectToDatabase();
  const doc = await Job.create(body);
  return NextResponse.json(doc, { status: 201 });
}


