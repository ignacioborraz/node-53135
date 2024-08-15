import { Injectable, NestMiddleware } from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';

@Injectable()
class CreateHash implements NestMiddleware {
  constructor() {}
  use(req: Request, res: Response, next: NextFunction) {
    req.body.password = hashSync(req.body.password, 10);
    return next();
  }
}

export default CreateHash;
