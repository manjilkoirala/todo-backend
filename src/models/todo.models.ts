import mongoose from "mongoose";

interface ITodo extends Document {
  title: string;
  description: string;
  status: string;
}

const TodoSchema = new mongoose.Schema<ITodo>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", TodoSchema);
