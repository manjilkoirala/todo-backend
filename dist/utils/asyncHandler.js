"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncHandler = (requestHandle) => {
    (req, res, next) => {
        Promise.resolve(requestHandle(req, res, next)).catch((err) => next(err));
    };
};
exports.default = asyncHandler;
//# sourceMappingURL=asyncHandler.js.map