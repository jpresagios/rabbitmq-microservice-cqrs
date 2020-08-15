import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
  .setTitle('Sport news service')
  .setDescription('APIs for the sport news service.')
  .setVersion('1.0.0')
  .setBasePath('/')
  .addTag('nestjs', 'microservice')
  .build();
