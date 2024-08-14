import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { UsersService } from "src/dao/users/users.service";
import { hashSync } from "bcrypt";

@Injectable()
export default class CreateHash implements NestMiddleware {
  constructor(private readonly usersService: UsersService) { }
  use(req: Request, res: Response, next: NextFunction) {
    req.body.password = hashSync(req.body.password, 10)
    return next()
  }
}