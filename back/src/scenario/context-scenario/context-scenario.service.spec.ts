import { Test, TestingModule } from '@nestjs/testing';
import { ContextScenarioService } from './context-scenario.service';

describe('ContextScenarioService', () => {
  let service: ContextScenarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContextScenarioService],
    }).compile();

    service = module.get<ContextScenarioService>(ContextScenarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
