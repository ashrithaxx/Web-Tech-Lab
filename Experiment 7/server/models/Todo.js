import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    task: { type: String, required: true, trim: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

export default mongoose.model("Todo", todoSchema);
