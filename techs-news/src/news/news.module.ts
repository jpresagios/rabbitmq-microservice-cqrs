import { Module } from '@nestjs/common';
import { NewsController } from './controllers/news/news.controller';
import { NewsRepositoryService } from './services/news-repository/news-repository.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TechsNewsSchema } from './models/techs-news.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TechsNewsSchema', schema: TechsNewsSchema },
    ]),
  ],
  controllers: [NewsController],
  providers: [NewsRepositoryService],
})
export class NewsModule {}
