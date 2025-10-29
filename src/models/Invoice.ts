import mongoose, { Schema, Model, Types } from "mongoose";

export interface InvoiceDoc extends mongoose.Document {
  customer: Types.ObjectId;
  jobs: Types.ObjectId[];
  subtotal: number;
  discount?: number;
  total: number;
  paid: number;
  balance: number;
  number: string; // e.g., INV-2025-001
  createdAt: Date;
  updatedAt: Date;
}

const InvoiceSchema = new Schema<InvoiceDoc>(
  {
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    jobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
    subtotal: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true },
    paid: { type: Number, default: 0 },
    balance: { type: Number, required: true },
    number: { type: String, required: true, unique: true, index: true },
  },
  { timestamps: true }
);

export const Invoice: Model<InvoiceDoc> =
  mongoose.models.Invoice || mongoose.model<InvoiceDoc>("Invoice", InvoiceSchema);


