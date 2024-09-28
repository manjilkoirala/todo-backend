"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const todo_validators_1 = require("../validators/todo.validators");
const todo_controllers_1 = require("../controllers/todo.controllers");
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
exports.todoRouter = router;
// Routes
router.get("/", auth_middleware_1.authenticateToken, todo_validators_1.getAllTodosValidator, todo_controllers_1.getAllTodos);
router.post("/", auth_middleware_1.authenticateToken, todo_validators_1.createTodoValidator, todo_controllers_1.createTodo);
router.delete("/:id", auth_middleware_1.authenticateToken, todo_validators_1.deleteTodoValidator, todo_controllers_1.deleteTodo);
router.patch("/:id", auth_middleware_1.authenticateToken, todo_validators_1.updateTodoValidator, todo_controllers_1.updateTodo);
//# sourceMappingURL=todo.routes.js.map