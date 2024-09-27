import mongoose from "mongoose";

interface ITodo extends Document {
  title: string;
  description: string;
  status: string;
  createdBy: mongoose.Types.ObjectId;
}

const todoSchema = new mongoose.Schema<ITodo>(
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
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
