import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const port = 8080; //la clase que viene le metemos la vriable de entorno
    app.use(morgan("dev"))
    await app.listen(port);
    console.log("server ready on port "+port);
    
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
