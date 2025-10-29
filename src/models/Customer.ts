import mongoose, { Schema, Model } from "mongoose";

export interface CustomerDoc extends mongoose.Document {
  name: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CustomerSchema = new Schema<CustomerDoc>(
  {
    name: { type: String, required: true, index: true },
    phone: { type: String },
    email: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: String },
    notes: { type: String },
  },
  { timestamps: true }
);

export const Customer: Model<CustomerDoc> =
  mongoose.models.Customer || mongoose.model<CustomerDoc>("Customer", CustomerSchema);


