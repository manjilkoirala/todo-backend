import {
  createTodoValidator,
  deleteTodoValidator,
  getAllTodosValidator,
  updateTodoValidator,
} from "../validators/todo.validators";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todo.controllers";
import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.middleware";

const router = Router();

// Routes

router.get("/", authenticateToken, getAllTodosValidator, getAllTodos);
router.post("/", authenticateToken, createTodoValidator, createTodo);
router.delete("/:id", authenticateToken, deleteTodoValidator, deleteTodo);
router.patch("/:id", authenticateToken, updateTodoValidator, updateTodo);

export { router as todoRouter };
