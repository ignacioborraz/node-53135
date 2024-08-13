import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // /users
  @Post()
  //transforma una funcion en una ruta de tipo POST
  create(@Body() createUserDto: CreateUserDto) {
    // @Body tranforma req.body en un objeto que este caso es createUserDto de tipo CreateUserDto
    return this.usersService.create(createUserDto);
  }

  // /users
  @Get()
  //transforma una funcion en una ruta de tipo GET
  findAll() {
    try {
      const all = this.usersService.findAll();
      if (all.length>0) {
        return all
      }
      //return new HttpException("Not found docs", 404)
      return new HttpException("Not found docs", HttpStatus.NOT_FOUND)
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  // /users/:id
  @Get(':id')
  //transforma una funcion en una ruta de tipo GET
  findOne(@Param('id') id: string) {
    // @Param que transforma un parámetro de ruta (id) en una variable id de tipo string
    return this.usersService.findOne(+id);
  }
  
  // /users/:id
  @Patch(':id')
  // @Patch transforma una funcion en una ruta de tipo PATCH
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // @Param que transforma un parámetro de ruta (id) en una variable id de tipo string
    // @Body tranforma req.body en un objeto que eeste caso es updateUserDto de tipo UpdateUserDto
    return this.usersService.update(+id, updateUserDto);
  }

  // /users/:id
  @Delete(':id')
  // @Delete transforma una funcion en una ruta de tipo DELETE
  remove(@Param('id') id: string) {
    // @Param que transforma un parámetro de ruta (id) en una variable id de tipo string
    return this.usersService.remove(+id);
  }
}
