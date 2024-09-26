import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { todoRouter } from "./routes/todo.routes";

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
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use("/api/v1/todos", todoRouter);

export { app };
