import { Test, TestingModule } from '@nestjs/testing';
import { EnemyScenarioController } from './enemy-scenario.controller';
import { EnemyScenarioService } from './enemy-scenario.service';

describe('EnemyScenarioController', () => {
  let controller: EnemyScenarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnemyScenarioController],
      providers: [EnemyScenarioService],
    }).compile();

    controller = module.get<EnemyScenarioController>(EnemyScenarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
