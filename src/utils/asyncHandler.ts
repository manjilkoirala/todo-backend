import { Request, Response, NextFunction } from "express";

const asyncHandler = (requestHandle: Function) => {
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandle(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;
