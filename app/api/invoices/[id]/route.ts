import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Invoice } from "@/models/Invoice";
import "@/models/Customer"; // register for populate
import "@/models/Job"; // register for populate

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  await connectToDatabase();
  const doc = await Invoice.findById(params.id).populate("customer jobs").lean();
  if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(doc);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  await connectToDatabase();
  const doc = await Invoice.findByIdAndUpdate(params.id, body, { new: true });
  if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(doc);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();
  await Invoice.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}


