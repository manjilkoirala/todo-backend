"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoValidator = exports.deleteTodoValidator = exports.createTodoValidator = exports.getAllTodosValidator = void 0;
const express_validator_1 = require("express-validator");
//validator for getting all todos
exports.getAllTodosValidator = [];
//validator for creating a todo
exports.createTodoValidator = [
    (0, express_validator_1.body)("title").notEmpty().withMessage("Title is required"),
    (0, express_validator_1.body)("description").notEmpty().withMessage("Description is required"),
    (0, express_validator_1.body)("status").notEmpty().withMessage("Status is required"),
    (0, express_validator_1.body)("status")
        .isIn(["active", "inactive"])
        .withMessage("Status must be active or inactive"),
];
//validator for deleting a todo
exports.deleteTodoValidator = [
    (0, express_validator_1.param)("id").isMongoId().withMessage("Invalid Todo Id"),
    (0, express_validator_1.param)("id").notEmpty().withMessage("Todo Id is required"),
];
//validator for updating a todo
exports.updateTodoValidator = [
    (0, express_validator_1.param)("id").isMongoId().withMessage("Invalid Todo Id"),
    (0, express_validator_1.param)("id").notEmpty().withMessage("Todo Id is required"),
    (0, express_validator_1.body)("title").notEmpty().withMessage("Title is required"),
    (0, express_validator_1.body)("description").notEmpty().withMessage("Description is required"),
    (0, express_validator_1.body)("status").notEmpty().withMessage("Status is required"),
    (0, express_validator_1.body)("status")
        .isIn(["active", "inactive"])
        .withMessage("Status must be active or inactive"),
];
//# sourceMappingURL=todo.validators.js.map