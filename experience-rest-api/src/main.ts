import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { AuthenticationMiddleware } from './common/authentication.middleware';
// import * as express from 'express';

async function bootstrap() {
  // Auth0 Tutorial
  // const server = express();
  // const auth = new AuthenticationMiddleware().use();
  // server.post('items', auth);
  // server.post('items', auth);

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
