import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // /users
  @Post()
  //transforma una funcion en una ruta de tipo POST
  async create(@Body() user: User) {
    try {
      // @Body tranforma req.body en un objeto que este caso es user de tipo User
      return await this.usersService.create(user);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  // /users
  @Get()
  //transforma una funcion en una ruta de tipo GET
  async findAll() {
    try {
      const all = await this.usersService.findAll();
      if (all.length > 0) {
        return all;
      }
      //return new HttpException("Not found docs", 404)
      return new HttpException('Not found docs', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  // /users/:id
  @Get(':id')
  //transforma una funcion en una ruta de tipo GET
  async findOne(@Param('id') id: string) {
    // @Param que transforma un parámetro de ruta (id) en una variable id de tipo string
    try {
      const one = await this.usersService.findOne(id);
      if (one) {
        return one;
      }
      //return new HttpException("Not found doc", 404)
      return new HttpException('Not found doc', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  // /users/:id
  @Patch(':id')
  // @Patch transforma una funcion en una ruta de tipo PATCH
  async update(@Param('id') id: string, @Body() data: User) {
    // @Param que transforma un parámetro de ruta (id) en una variable id de tipo string
    // @Body tranforma req.body en un objeto que eeste caso es data de tipo User
    try {
      const one = await this.usersService.update(id, data);
      if (one) {
        return one;
      }
      //return new HttpException("Not found doc", 404)
      return new HttpException('Not found doc', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  // /users/:id
  @Delete(':id')
  // @Delete transforma una funcion en una ruta de tipo DELETE
  async remove(@Param('id') id: string) {
    // @Param que transforma un parámetro de ruta (id) en una variable id de tipo string
    try {
      const one = await this.usersService.remove(id);
      if (one) {
        return one;
      }
      //return new HttpException("Not found doc", 404)
      return new HttpException('Not found doc', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
