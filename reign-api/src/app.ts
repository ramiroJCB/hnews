import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log(`Application is running on: ${await app.getUrl()}`);
  await app.listen(5000);
}
bootstrap();
