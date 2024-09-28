"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.createTodo = exports.getAllTodos = void 0;
const todo_models_1 = require("../models/todo.models");
const user_models_1 = require("../models/user.models");
// Get all todos
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId;
        const todos = yield todo_models_1.Todo.find({ createdBy: userId });
        res.status(200).json({ message: "Get all todos", todos });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getAllTodos = getAllTodos;
// create a todo
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { title, description, status } = req.body;
        const userId = (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId; // Get the logged-in user's ID
        const newTodo = yield todo_models_1.Todo.create({
            title,
            description,
            status,
            createdBy: userId,
        });
        const user = yield user_models_1.User.findById(userId);
        if (user) {
            user.todos.push(newTodo._id);
            yield user.save();
        }
        res.status(201).json({ message: "Todo Created", newTodo });
        console.log(req.body);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createTodo = createTodo;
// delete a todo
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deleteTodo = yield todo_models_1.Todo.findByIdAndDelete(id);
        res.status(200).json(deleteTodo);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteTodo = deleteTodo;
//update a todo
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const updateTodo = yield todo_models_1.Todo.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(updateTodo);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateTodo = updateTodo;
//# sourceMappingURL=todo.controllers.js.map