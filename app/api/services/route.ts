import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// Temporarily using process-global in-memory list!
const services = (global as any)._venka_services ?? ((global as any)._venka_services = [
  "CNC Cutting & Carving", "CNC Engraving", "Custom Wood Design", "Temple Door", "Portrait", "Decorative Jali & Grills", "Wall Art", "Furniture Crafting"
]);

export async function GET() {
  return NextResponse.json(services);
}
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { name } = await req.json();
  if (name && !services.includes(name)) services.unshift(name);
  return NextResponse.json(services);
}
export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { old, name } = await req.json();
  const idx = services.indexOf(old);
  if (idx !== -1 && name) services[idx] = name;
  return NextResponse.json(services);
}
export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { name } = await req.json();
  const idx = services.indexOf(name);
  if (idx !== -1) services.splice(idx, 1);
  return NextResponse.json(services);
}
