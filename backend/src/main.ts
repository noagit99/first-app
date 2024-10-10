import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv'; // Import dotenv config
import { AppModule } from './app.module';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => {
    console.log(`THE Server is running on port ${PORT}`);
  });
}
bootstrap();
