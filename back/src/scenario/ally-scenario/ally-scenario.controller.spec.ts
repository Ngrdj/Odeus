import { Test, TestingModule } from '@nestjs/testing';
import { AllyScenarioController } from './ally-scenario.controller';
import { AllyScenarioService } from './ally-scenario.service';

describe('AllyScenarioController', () => {
  let controller: AllyScenarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllyScenarioController],
      providers: [AllyScenarioService],
    }).compile();

    controller = module.get<AllyScenarioController>(AllyScenarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
