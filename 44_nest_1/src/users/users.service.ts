import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;
  constructor() {
    this.users = [
      {
        _id: '123456',
        email: 'igna@coder.com',
        password: 'hola1234',
        role: 1,
      },
      { _id: '12345', email: 'dani@coder.com', password: 'hola1234', role: 1 },
      {
        _id: '123458',
        email: 'lauti@coder.com',
        password: 'hola1234',
        role: 1,
      },
      {
        _id: '123459',
        email: 'talia@coder.com',
        password: 'hola1234',
        role: 1,
      },
    ];
  }
  create(createUserDto: CreateUserDto) {
    const data: CreateUserDto = {
      _id: createUserDto._id || String(Math.floor(Math.random() * 1000000)),
      email: createUserDto.email,
      password: createUserDto.password,
      role: createUserDto.role || 0,
    };
    this.users.push(data);
    return data._id;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
