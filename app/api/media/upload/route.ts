import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";
import { connectToDatabase } from "@/lib/db";
import { Media } from "@/models/Media";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json({ error: "Invalid content-type" }, { status: 400 });
  }

  const form = await req.formData();
  const file = form.get("file") as File | null;
  const title = (form.get("title") as string) || undefined;
  const category = (form.get("category") as string) || undefined;
  if (!file) return NextResponse.json({ error: "File missing" }, { status: 400 });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const folder = process.env.CLOUDINARY_FOLDER || "venkateshwara/uploads";

  const uploadResult = await new Promise<any>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    uploadStream.end(buffer);
  });

  await connectToDatabase();
  await Media.create({
    publicId: uploadResult.public_id,
    url: uploadResult.secure_url,
    width: uploadResult.width,
    height: uploadResult.height,
    format: uploadResult.format,
    folder: uploadResult.folder,
    title,
    category,
  });

  return NextResponse.json({
    publicId: uploadResult.public_id,
    url: uploadResult.secure_url,
  });
}


