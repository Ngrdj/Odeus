import { Test, TestingModule } from '@nestjs/testing';
import { BonusScenarioController } from './bonus-scenario.controller';
import { BonusScenarioService } from './bonus-scenario.service';

describe('BonusScenarioController', () => {
  let controller: BonusScenarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BonusScenarioController],
      providers: [BonusScenarioService],
    }).compile();

    controller = module.get<BonusScenarioController>(BonusScenarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
