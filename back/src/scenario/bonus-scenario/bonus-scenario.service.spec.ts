import { Test, TestingModule } from '@nestjs/testing';
import { BonusScenarioService } from './bonus-scenario.service';

describe('BonusScenarioService', () => {
  let service: BonusScenarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BonusScenarioService],
    }).compile();

    service = module.get<BonusScenarioService>(BonusScenarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
