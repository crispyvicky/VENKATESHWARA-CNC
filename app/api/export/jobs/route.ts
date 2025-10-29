import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Job } from "@/models/Job";
import { stringify } from "csv-stringify/sync";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();
  const rows = await Job.find().populate("customer").lean();
  const flat = rows.map((j: any) => ({
    id: j._id,
    customer: j.customer?.name,
    description: j.description,
    rate: j.rate,
    quantity: j.quantity,
    discount: j.discount,
    advance: j.advance,
    total: j.total,
    paid: j.paid,
    balance: j.balance,
    status: j.status,
    createdAt: j.createdAt,
  }));
  const csv = stringify(flat, { header: true });
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=jobs.csv",
    },
  });
}


