import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { UsersService } from '../users/users.service';
import IsValidEmail from 'src/middlewares/isValidEmail';
import CreateHash from 'src/middlewares/createHash';

@Module({
  imports: [
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [UsersService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IsValidEmail).forRoutes({ path: 'auth/register', method: RequestMethod.POST })
    consumer.apply(CreateHash).forRoutes({ path: 'auth/register', method: RequestMethod.POST })
  }
}

