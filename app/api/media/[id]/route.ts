import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Media } from "@/models/Media";
import cloudinary from "@/lib/cloudinary";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  await connectToDatabase();
  const updated = await Media.findByIdAndUpdate(params.id, {
    title: body.title,
    category: body.category,
  }, { new: true });
  if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();
  const doc = await Media.findById(params.id);
  if (!doc) return NextResponse.json({ error: "Not found" }, { status: 404 });
  // remove from Cloudinary
  if (doc.publicId) {
    try { await cloudinary.uploader.destroy(doc.publicId, { resource_type: "image" }); } catch {}
  }
  await Media.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}


