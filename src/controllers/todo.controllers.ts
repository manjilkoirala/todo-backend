import { Request, Response } from "express";
import { Todo } from "../models/todo.models";

// Get all todos
export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ message: "Get all todos", todos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create a todo
export const createTodo = async (req: Request, res: Response) => {
  try {
    const createTodo = await Todo.create(req.body);
    res.status(201).json({ message: "Todo Created", createTodo });
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
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
