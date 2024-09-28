"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserValidator = exports.registerUserValidator = void 0;
const express_validator_1 = require("express-validator");
//validator for registering a user
exports.registerUserValidator = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name is required"),
    (0, express_validator_1.body)("email").isEmail().withMessage("Invalid email"),
    (0, express_validator_1.body)("email").notEmpty().withMessage("Email is required"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required"),
    (0, express_validator_1.body)("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long"),
    (0, express_validator_1.body)("password")
        .matches("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd@$!%*?&]{8,}$")
        .withMessage("Password must contain at least one letter and one number"),
    (0, express_validator_1.body)("confirmPassword")
        .notEmpty()
        .withMessage("Confirm password is required"),
];
//validator for logging in a user
exports.loginUserValidator = [
    (0, express_validator_1.body)("email").isEmail().withMessage("Invalid email"),
    (0, express_validator_1.body)("email").notEmpty().withMessage("Email is required"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password is required"),
];
//# sourceMappingURL=user.validators.js.map