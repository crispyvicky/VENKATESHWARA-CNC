import mongoose, { Schema, Model, Types } from "mongoose";

export interface TaskDoc extends mongoose.Document {
  job: Types.ObjectId;
  description: string;
  status: "pending" | "finished";
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<TaskDoc>(
  {
    job: { type: Schema.Types.ObjectId, ref: "Job", required: true, index: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["pending", "finished"], default: "pending" },
  },
  { timestamps: true }
);

export const Task: Model<TaskDoc> = mongoose.models.Task || mongoose.model<TaskDoc>("Task", TaskSchema);
