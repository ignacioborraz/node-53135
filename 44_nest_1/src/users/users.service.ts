import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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

  create(user: User) {
    user = new CreateUserDto(user);
    this.users.push(user);
    return user._id;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((each) => each._id === id);
  }

  findByEmail(email: string) {
    return this.users.find((each) => each.email === email);
  }

  update(id: string, data: User) {
    const user = this.users.find((each) => each._id === id);
    if (user) {
      for (let prop in data) {
        user[prop] = data[prop];
      }
    }
    return user;
  }

  remove(id: string) {
    const user = this.users.find((each) => each._id === id);
    if (user) {
      this.users = this.users.filter((each) => each._id !== id);
    }
    return user;
  }

}
