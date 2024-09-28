import { Request, Response } from "express";
import { Todo } from "../models/todo.models";
import { User } from "../models/user.models";
import ApiError from "../utils/APIError";

// Get all todos
export const getAllTodos = async (
  req: Request & { user: any },
  res: Response
) => {
  try {
    const userId = req.user?.userId;
    const todos = await Todo.find({ createdBy: userId });
    res.status(200).json({ message: "Get all todos", todos });
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

// create a todo
export const createTodo = async (
  req: Request & { user: any },
  res: Response
) => {
  try {
    const { title, description, status } = req.body;
    const userId = req.user?.userId; // Get the logged-in user's ID

    const newTodo = await Todo.create({
      title,
      description,
      status,
      createdBy: userId,
    });
    const user = await User.findById(userId);
    if (user) {
      user.todos.push(newTodo._id);
      await user.save();
    }
    res.status(201).json({ message: "Todo Created", newTodo });
    console.log(req.body);
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

// delete a todo
export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json(deleteTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update a todo

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updateTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
