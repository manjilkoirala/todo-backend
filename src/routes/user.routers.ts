import {
  loginUserValidator,
  registerUserValidator,
} from "../validators/user.validators";
import { loginUser, registerUser } from "../controllers/user.controllers";
import { Router } from "express";

const router = Router();

// Routes

router.post("/register", registerUserValidator, registerUser);
router.post("/login", loginUserValidator, loginUser);

export { router as userRouter };
