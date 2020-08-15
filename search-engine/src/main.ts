import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import env from './configs/env-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [env.AMQP_URL],
      queue: 'news_queue',
      noAck: false,
      queueOptions: { durable: false },
    },
  });

  await app.startAllMicroservicesAsync();

  await app.listen(env.API_PORT);
}
bootstrap();
