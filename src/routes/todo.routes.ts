import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todo.controllers";
import { Router } from "express";

const router = Router();

// Get all todos

router.get("/", getAllTodos);
router.post("/create", createTodo);
router.delete("/delete/:id", deleteTodo);
router.patch("/update/:id", updateTodo);

export { router as todoRouter };
