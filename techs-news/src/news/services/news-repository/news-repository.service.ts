import { Injectable } from '@nestjs/common';
import { TechNews } from '../../interfaces/tech-news.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class NewsRepositoryService {
  constructor(
    @InjectModel('TechsNewsSchema') private readonly techNews: Model<TechNews>,
  ) {}

  async findAll() {
    return await this.techNews.find();
  }

  create(news) {
    news._id = new Types.ObjectId();
    const techNews = new this.techNews(news);

    return techNews.save();
  }
}
