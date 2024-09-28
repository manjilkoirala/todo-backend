import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { todoRouter } from "./routes/todo.routes";
import { userRouter } from "./routes/user.routers";

const app = express();

app.use(
  cors({
    origin: `${process.env.FRONTEND_URL}`,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "20kb",
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/users", userRouter);

// Error handler

export { app };
