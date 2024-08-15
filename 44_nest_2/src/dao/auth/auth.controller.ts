import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post('register')
  async register(@Body() user: User) {
    try {
      return await this.usersService.create(user);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
