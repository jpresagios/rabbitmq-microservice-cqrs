import { Test, TestingModule } from '@nestjs/testing';
import { NewsRepositoryService } from './news-repository.service';

describe('NewsRepositoryService', () => {
  let service: NewsRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsRepositoryService],
    }).compile();

    service = module.get<NewsRepositoryService>(NewsRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
