import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Job } from "@/models/Job";
import "@/models/Customer"; // ensure model is registered for populate
import { Task } from "@/models/Task";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const doc = await Job.findById(params.id).populate("customer").lean();
  if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(doc);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  await connectToDatabase();
  const doc = await Job.findByIdAndUpdate(params.id, body, { new: true });
  if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // If the status is being updated to 'completed', set all related tasks status to 'finished'
  if (body.status === "completed") {
    await Task.updateMany({ job: params.id }, { status: "finished" });
  }

  return NextResponse.json(doc);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();
  await Job.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}


