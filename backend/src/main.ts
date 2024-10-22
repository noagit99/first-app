import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv'; // Import dotenv config
import { AppModule } from './app.module';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

// Define allowed origins with regex
const allowedOrigins = [
  'http://localhost:5173',
  /https:\/\/.*\.vercel\.app/
];

// Enable CORS
app.enableCors({
  origin: (origin, callback) => {
      if (!origin || allowedOrigins.some(pattern => 
          typeof pattern === 'string' ? pattern === origin : pattern.test(origin)
      )) {
          callback(null, origin);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});


  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => {
    console.log(`THE Server is running on port ${PORT}`);
  });
}
bootstrap();

