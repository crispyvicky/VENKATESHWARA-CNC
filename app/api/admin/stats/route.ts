import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Job } from "@/models/Job";
import { Payment } from "@/models/Payment";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await connectToDatabase();

  const totalJobs = await Job.countDocuments();
  const aggregate = await Job.aggregate([
    {
      $group: {
        _id: null,
        totalAmount: { $sum: "$total" },
        totalAdvance: { $sum: "$advance" },
        totalPaid: { $sum: "$paid" },
        totalBalance: { $sum: "$balance" },
      },
    },
  ]);

  const { totalAmount = 0, totalAdvance = 0, totalPaid = 0, totalBalance = 0 } = aggregate[0] || {};

  return NextResponse.json({ totalJobs, totalAmount, totalAdvance, totalPaid, totalBalance });
}


