import { Test, TestingModule } from '@nestjs/testing';
import { EnemyScenarioService } from './enemy-scenario.service';

describe('EnemyScenarioService', () => {
  let service: EnemyScenarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnemyScenarioService],
    }).compile();

    service = module.get<EnemyScenarioService>(EnemyScenarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
