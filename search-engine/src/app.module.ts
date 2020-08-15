import { Module } from '@nestjs/common';
import { SearchEngineModule } from './search-engine/search-engine.module';

@Module({
  imports: [SearchEngineModule],
})
export class AppModule {}
