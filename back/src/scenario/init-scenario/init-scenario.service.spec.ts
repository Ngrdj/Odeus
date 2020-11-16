import { Test, TestingModule } from '@nestjs/testing';
import { InitScenarioService } from './init-scenario.service';

describe('InitScenarioService', () => {
  let service: InitScenarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitScenarioService],
    }).compile();

    service = module.get<InitScenarioService>(InitScenarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
