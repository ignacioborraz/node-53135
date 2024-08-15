import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.use(morgan('dev'));
    app.setGlobalPrefix('api')
    //const port = process.env.PORT || 8080;
    const port = app.get(ConfigService).get("PORT") || 8080
    await app.listen(port);
    console.log('server ready on port ' + port);
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
