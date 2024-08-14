import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { UsersService } from "src/dao/users/users.service";
import { compare } from "bcrypt";

@Injectable()
export default class IsValidUser implements NestMiddleware {
  constructor(private readonly usersService: UsersService) { }
  async use(req: Request, res: Response, next: NextFunction) {
    let one = await this.usersService.findByEmail(req.body.email)
    if (one) {
      let verified = await compare(req.body.password, one.password)
      if (verified) return next()
    }
    throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED)
  }
}