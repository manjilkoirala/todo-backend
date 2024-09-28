"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const todo_routes_1 = require("./routes/todo.routes");
const user_routers_1 = require("./routes/user.routers");
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)({
    origin: `${process.env.FRONTEND_URL}`,
    credentials: true,
}));
app.use(express_1.default.json({
    limit: "20kb",
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
// Routes
app.use("/api/v1/todos", todo_routes_1.todoRouter);
app.use("/api/v1/users", user_routers_1.userRouter);
//# sourceMappingURL=app.js.map