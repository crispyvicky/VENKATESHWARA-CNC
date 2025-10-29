import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Customer } from "@/models/Customer";

export async function GET() {
  await connectToDatabase();
  const list = await Customer.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  await connectToDatabase();
  const doc = await Customer.create(body);
  return NextResponse.json(doc, { status: 201 });
}


