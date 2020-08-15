import { Controller, Post, Body } from '@nestjs/common';
import { NewsRepositoryService } from '../../services/news/news.service';
import { NewRequest } from '../../requests/new.request';
import { Transport, ClientProxy, Client } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import env from '../../../configs/env-config';

@Controller('news/sports')
export class NewsController {
  private readonly logger = new Logger(NewsController.name);

  constructor(private readonly sportServices: NewsRepositoryService) {}

  @Client({
    transport: Transport.RMQ,
    options: {
      urls: [env.AMQP_URL],
      queue: 'news_queue',
      queueOptions: { durable: false },
      noAck: false,
    },
  })
  client: ClientProxy;

  @Post()
  @ApiOperation({
    summary:
      'News persists and publishes asynchronous messages allowing other services to consume these',
  })
  @ApiResponse({
    status: 201,
    type: NewRequest,
  })
  create(@Body() news: NewRequest) {
    try {
      const result = this.sportServices.create(news);

      this.client.emit({ cmd: 'news.sports' }, news);

      return result;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
