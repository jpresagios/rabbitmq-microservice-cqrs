import { Module } from '@nestjs/common';
import { NewsModule } from './news/news.module';
import { MongooseModule } from '@nestjs/mongoose';
import env from './configs/env-config';

@Module({
  imports: [NewsModule, MongooseModule.forRoot(env.MONGODB_URI)],
})
export class AppModule {}
