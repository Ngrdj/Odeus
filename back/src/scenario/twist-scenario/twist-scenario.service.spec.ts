import { Test, TestingModule } from '@nestjs/testing';
import { TwistScenarioService } from './twist-scenario.service';

describe('TwistScenarioService', () => {
  let service: TwistScenarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwistScenarioService],
    }).compile();

    service = module.get<TwistScenarioService>(TwistScenarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
