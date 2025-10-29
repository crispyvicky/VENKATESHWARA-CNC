import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Media } from "@/models/Media";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  await connectToDatabase();
  const items = await Media.find().sort({ createdAt: -1 }).limit(100).lean();
  return NextResponse.json(items);
}


