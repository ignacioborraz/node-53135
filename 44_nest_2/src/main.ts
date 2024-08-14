import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.use(morgan('dev'));
    const port = new ConfigService().get('PORT');
    await app.listen(port);
    console.log('server ready on port ' + port);
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
