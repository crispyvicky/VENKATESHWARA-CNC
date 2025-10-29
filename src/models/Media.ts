import mongoose, { Schema, Model } from "mongoose";

export interface MediaDoc extends mongoose.Document {
  publicId: string;
  url: string;
  width: number;
  height: number;
  format: string;
  folder?: string;
  category?: string;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
}

const MediaSchema = new Schema<MediaDoc>(
  {
    publicId: { type: String, required: true, index: true, unique: true },
    url: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    format: { type: String, required: true },
    folder: { type: String },
    category: { type: String },
    title: { type: String },
  },
  { timestamps: true }
);

export const Media: Model<MediaDoc> =
  mongoose.models.Media || mongoose.model<MediaDoc>("Media", MediaSchema);


