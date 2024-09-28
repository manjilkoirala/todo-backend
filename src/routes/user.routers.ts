import {
  loginUserValidator,
  registerUserValidator,
} from "../validators/user.validators";
import { loginUser, registerUser } from "../controllers/user.controllers";
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";

const router = Router();

// Routes

router.post(
  "/register",
  upload.single("avatar"),
  registerUserValidator,
  registerUser
);
router.post("/login", loginUserValidator, loginUser);

export { router as userRouter };
