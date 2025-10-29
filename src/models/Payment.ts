import mongoose, { Schema, Model, Types } from "mongoose";

export interface PaymentDoc extends mongoose.Document {
  customer: Types.ObjectId;
  job?: Types.ObjectId;
  amount: number;
  method?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new Schema<PaymentDoc>(
  {
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true, index: true },
    job: { type: Schema.Types.ObjectId, ref: "Job" },
    amount: { type: Number, required: true },
    method: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

export const Payment: Model<PaymentDoc> =
  mongoose.models.Payment || mongoose.model<PaymentDoc>("Payment", PaymentSchema);


