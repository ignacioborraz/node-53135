import { HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { UsersService } from "src/dao/users/users.service";

@Injectable()
class IsValidEmail implements NestMiddleware {
  constructor(private service: UsersService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const one = await this.service.findByEmail(req.body.email)
      if (!one) {
        return next() 
      } else {
        throw new HttpException("INVALID CREDENTIALS", 401)      
      }
    } catch (error) {
      console.log(error);      
      throw new HttpException(error.message, error.status)
    }
  }
}

export default IsValidEmail