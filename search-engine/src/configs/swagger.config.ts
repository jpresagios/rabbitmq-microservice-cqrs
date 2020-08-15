import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
  .setTitle('Search news service')
  .setDescription('APIs Searching capabilities related to news')
  .setVersion('1.0.0')
  .setBasePath('/')
  .addTag('nestjs', 'microservice')
  .build();
