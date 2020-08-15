import { Test, TestingModule } from '@nestjs/testing';
import { SearchEngineController } from './search-engine.controller';

describe('SearchEngine Controller', () => {
  let controller: SearchEngineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchEngineController],
    }).compile();

    controller = module.get<SearchEngineController>(SearchEngineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
