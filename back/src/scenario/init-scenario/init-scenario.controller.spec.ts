import { Test, TestingModule } from '@nestjs/testing';
import { InitScenarioController } from './init-scenario.controller';
import { InitScenarioService } from './init-scenario.service';

describe('InitScenarioController', () => {
  let controller: InitScenarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitScenarioController],
      providers: [InitScenarioService],
    }).compile();

    controller = module.get<InitScenarioController>(InitScenarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
