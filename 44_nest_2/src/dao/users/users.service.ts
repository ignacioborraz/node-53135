import { Injectable } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private model: Model<User>) {}

  async create(user: User) {
    const one = await this.model.create(user);
    return one._id;
  }

  async findAll() {
    const all = await this.model.find();
    return all;
  }

  async findOne(id: string) {
    const one = await this.model.findById(id);
    return one;
  }

  async findByEmail(email: string) {
    const one = await this.model.findOne({ email });
    return one;
  }

  async update(id: string, data: User) {
    const one = await this.model.findByIdAndUpdate(id, data, { new: true });
    return one;
  }

  async remove(id: string) {
    const one = await this.model.findByIdAndDelete(id);
    return one;
  }

}
