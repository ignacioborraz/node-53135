import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post('register')
  //transforma una funcion en una ruta de tipo POST
  async register(@Body() user: User) {
    try {
      // @Body tranforma req.body en un objeto que este caso es user de tipo User
      return await this.usersService.create(user);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
