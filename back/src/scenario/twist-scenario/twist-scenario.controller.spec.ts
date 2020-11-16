import { Test, TestingModule } from '@nestjs/testing';
import { TwistScenarioController } from './twist-scenario.controller';
import { TwistScenarioService } from './twist-scenario.service';

describe('TwistScenarioController', () => {
  let controller: TwistScenarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwistScenarioController],
      providers: [TwistScenarioService],
    }).compile();

    controller = module.get<TwistScenarioController>(TwistScenarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
