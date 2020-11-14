import { Test, TestingModule } from '@nestjs/testing';
import { AllyScenarioService } from './ally-scenario.service';

describe('AllyScenarioService', () => {
  let service: AllyScenarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllyScenarioService],
    }).compile();

    service = module.get<AllyScenarioService>(AllyScenarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
