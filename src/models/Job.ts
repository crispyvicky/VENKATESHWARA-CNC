import mongoose, { Schema, Model, Types } from "mongoose";

export interface JobDoc extends mongoose.Document {
  customer: Types.ObjectId;
  description: string;
  rate: number;
  quantity: number;
  discount?: number;
  advance?: number;
  total: number;
  paid: number;
  balance: number;
  status: "pending" | "in_progress" | "completed";
  invoiceId?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<JobDoc>(
  {
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true, index: true },
    description: { type: String, required: true },
    rate: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    discount: { type: Number, default: 0 },
    advance: { type: Number, default: 0 },
    total: { type: Number, required: true },
    paid: { type: Number, default: 0 },
    balance: { type: Number, required: true },
    status: { type: String, enum: ["pending", "in_progress", "completed"], default: "pending" },
    invoiceId: { type: Schema.Types.ObjectId, ref: "Invoice" },
  },
  { timestamps: true }
);

export const Job: Model<JobDoc> = mongoose.models.Job || mongoose.model<JobDoc>("Job", JobSchema);


