"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const user_validators_1 = require("../validators/user.validators");
const user_controllers_1 = require("../controllers/user.controllers");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.userRouter = router;
// Routes
router.post("/register", user_validators_1.registerUserValidator, user_controllers_1.registerUser);
router.post("/login", user_validators_1.loginUserValidator, user_controllers_1.loginUser);
//# sourceMappingURL=user.routers.js.map