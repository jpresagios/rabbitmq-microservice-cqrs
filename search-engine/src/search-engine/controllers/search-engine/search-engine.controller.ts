import { Controller, Query, Get } from '@nestjs/common';
import {
  MessagePattern,
  Ctx,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NewRequest } from '../../requests/new.request';
import { SearchEngineService } from '../../services/search-engine/search-engine.service';
import { Logger } from '@nestjs/common';

@Controller('search-engine')
export class SearchEngineController {
  private readonly logger = new Logger(SearchEngineController.name);

  constructor(private readonly searchService: SearchEngineService) {}

  @Get()
  @ApiOperation({
    summary: 'Retrieve news filter using q=tech or q=sports or q=all',
  })
  @ApiResponse({
    status: 201,
    type: NewRequest,
    isArray: true,
    description:
      'Lists news filtered by query params ?q=all returned all news, q=tech news filtered by tech and q=sports news filtered by sport',
  })
  public async search(@Query('q') q: string) {
    const result = this.searchService.searchNews(q);
    return result;
  }

  @MessagePattern({ cmd: 'news.techs' })
  public async newsTechsMessageHandle(
    @Payload() news,
    @Ctx() context: RmqContext,
  ) {
    try {
      this.logger.log(news);

      const { title, body } = news;
      await this.searchService.insertNew({ title, body, type: 'tech' });

      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();

      channel.ack(originalMsg);

      return true;
    } catch (error) {
      this.logger.log(error);
      return false;
    }
  }

  @MessagePattern({ cmd: 'news.sports' })
  public async newsSportsMessageHandle(
    @Payload() news,
    @Ctx() context: RmqContext,
  ) {
    try {
      this.logger.log(news);

      const { title, body } = news;
      await this.searchService.insertNew({ title, body, type: 'sports' });

      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();

      channel.ack(originalMsg);

      return true;
    } catch (error) {
      this.logger.log(error);
      return false;
    }
  }
}
