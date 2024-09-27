import { body, param } from "express-validator";

//validator for registering a user
export const registerUserValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("email").notEmpty().withMessage("Email is required"),
  body("password").notEmpty().withMessage("Password is required"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("password")
    .matches("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd@$!%*?&]{8,}$")
    .withMessage("Password must contain at least one letter and one number"),
  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm password is required"),
];

//validator for logging in a user
export const loginUserValidator = [
  body("email").isEmail().withMessage("Invalid email"),
  body("email").notEmpty().withMessage("Email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];
