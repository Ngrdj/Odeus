import { Test, TestingModule } from '@nestjs/testing';
import { PnjSkillService } from './pnj-skill.service';

describe('PnjSkillService', () => {
  let service: PnjSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PnjSkillService],
    }).compile();

    service = module.get<PnjSkillService>(PnjSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
