import dotenv from "dotenv";
import connectDB from "./db";
import { app } from "./app";

dotenv.config({
  path: ".env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running on port ${process.env.PORT || 8080}`);
    });
  })
  .catch((err) => console.log("Error connecting to DB", err));
