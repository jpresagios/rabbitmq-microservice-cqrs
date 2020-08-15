import { Module } from '@nestjs/common';
import { NewsController } from './controllers/news/news.controller';
import { NewsRepositoryService } from './services/news/news.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SportsNewsSchema } from './models/sports-news.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SportsNewsSchema', schema: SportsNewsSchema },
    ]),
  ],
  controllers: [NewsController],
  providers: [NewsRepositoryService],
})
export class NewsModule {}
