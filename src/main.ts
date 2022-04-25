import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8080, () => {
    console.log(`🔥 Server Running... 🔥`);
  });
}
bootstrap().catch(({ message }) => console.log('error', message));
