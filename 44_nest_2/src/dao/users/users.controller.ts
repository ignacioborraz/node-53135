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

  @Post()
  async create(@Body() user: User) {
    try {
      return await this.usersService.create(user);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get()
  async findAll() {
    try {
      const all = await this.usersService.findAll();
      if (all.length > 0) {
        return all;
      }
      return new HttpException('Not found docs', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const one = await this.usersService.findOne(id);
      if (one) {
        return one;
      }
      return new HttpException('Not found doc', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: User) {
    try {
      const one = await this.usersService.update(id, data);
      if (one) {
        return one;
      }
      return new HttpException('Not found doc', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const one = await this.usersService.remove(id);
      if (one) {
        return one;
      }
      return new HttpException('Not found doc', HttpStatus.NOT_FOUND);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
