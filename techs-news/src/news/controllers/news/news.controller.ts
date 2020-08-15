import { Controller, Post, Body } from '@nestjs/common';
import { NewsRepositoryService } from '../../services/news-repository/news-repository.service';
import { NewRequest } from '../../requests/new.request';
import { Transport, ClientProxy, Client } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import env from '../../../configs/env-config';

@Controller('news/tech')
export class NewsController {
  private readonly logger = new Logger(NewsController.name);

  constructor(private readonly techServices: NewsRepositoryService) {}

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
      const result = this.techServices.create(news);

      this.client.emit({ cmd: 'news.techs' }, news);

      return result;
    } catch (error) {
      this.logger.error(error);
    }
  }
}
