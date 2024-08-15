import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export default class CreateToken implements NestMiddleware {
  constructor(private jwtService: JwtService) { }
  use(req: Request, res: Response, next: NextFunction) {
    const token = this.jwtService.sign(req.body.email)
    res.cookie("token", token);
    return next()
  }
}