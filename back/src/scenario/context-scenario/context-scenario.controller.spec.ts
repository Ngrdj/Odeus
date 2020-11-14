import { Test, TestingModule } from '@nestjs/testing';
import { ContextScenarioController } from './context-scenario.controller';
import { ContextScenarioService } from './context-scenario.service';

describe('ContextScenarioController', () => {
  let controller: ContextScenarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContextScenarioController],
      providers: [ContextScenarioService],
    }).compile();

    controller = module.get<ContextScenarioController>(ContextScenarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
