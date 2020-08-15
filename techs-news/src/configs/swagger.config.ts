import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
  .setTitle('Tech news service')
  .setDescription('APIs for the tech news service.')
  .setVersion('1.0.0')
  .setBasePath('/')
  .addTag('nestjs', 'microservice')
  .build();
