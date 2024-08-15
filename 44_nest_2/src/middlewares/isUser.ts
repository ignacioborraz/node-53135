import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export default class CreateToken implements NestMiddleware {
  constructor(private jwtService: JwtService, private config: ConfigService) { }
  use(req: Request, res: Response, next: NextFunction) {
    if (req.cookies && req.cookies.token) {
      const email = this.jwtService.verify(req.cookies.token, { secret: this.config.get<string>("SECRET_KEY") });
      if (email) return next()
    }
    throw new HttpException("Forbidden", HttpStatus.FORBIDDEN)
  }
}