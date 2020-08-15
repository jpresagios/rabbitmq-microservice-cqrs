import { Injectable } from '@nestjs/common';
import { SportNews } from '../../interfaces/sport-news.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class NewsRepositoryService {
  constructor(
    @InjectModel('SportsNewsSchema')
    private readonly sportNews: Model<SportNews>,
  ) {}

  async findAll() {
    return await this.sportNews.find();
  }

  create(news) {
    news._id = new Types.ObjectId();
    const sportNews = new this.sportNews(news);
    return sportNews.save();
  }
}
