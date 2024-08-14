import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
  @Prop({ unique: true, required: true }) email: string;
  @Prop({ required: true }) password: string;
  @Prop({ default: 0 }) role: number;
}

export type UserType = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);

