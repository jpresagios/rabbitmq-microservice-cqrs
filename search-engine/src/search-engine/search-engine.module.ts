import { Module } from '@nestjs/common';
import { SearchEngineController } from './controllers/search-engine/search-engine.controller';
import { SearchEngineService } from './services/search-engine/search-engine.service';

@Module({
  controllers: [SearchEngineController],
  providers: [SearchEngineService],
})
export class SearchEngineModule {}
