import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
class User {
  @Prop({ unique: true, required: true }) email: string;
  @Prop({ required: true }) password: string;
  @Prop({ default: 0 }) role: number;
}

type UserType = HydratedDocument<User>;
const UserSchema = SchemaFactory.createForClass(User);

export { User, UserType, UserSchema };
