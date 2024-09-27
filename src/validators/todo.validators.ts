import { body, param } from "express-validator";

//validator for getting all todos
export const getAllTodosValidator = <any>[];

//validator for creating a todo
export const createTodoValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("status").notEmpty().withMessage("Status is required"),
  body("status")
    .isIn(["active", "inactive"])
    .withMessage("Status must be active or inactive"),
];

//validator for deleting a todo
export const deleteTodoValidator = [
  param("id").isMongoId().withMessage("Invalid Todo Id"),
  param("id").notEmpty().withMessage("Todo Id is required"),
];

//validator for updating a todo
export const updateTodoValidator = [
  param("id").isMongoId().withMessage("Invalid Todo Id"),
  param("id").notEmpty().withMessage("Todo Id is required"),
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("status").notEmpty().withMessage("Status is required"),
  body("status")
    .isIn(["active", "inactive"])
    .withMessage("Status must be active or inactive"),
];
