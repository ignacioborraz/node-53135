import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export default class ClearToken implements NestMiddleware {
  constructor() { }
  use(req: Request, res: Response, next: NextFunction) {
    res.clearCookie("token");
    return next()
  }
}