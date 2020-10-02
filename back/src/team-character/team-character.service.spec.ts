import { Test, TestingModule } from '@nestjs/testing';
import { TeamCharacterService } from './team-character.service';

describe('TeamCharacterService', () => {
  let service: TeamCharacterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamCharacterService],
    }).compile();

    service = module.get<TeamCharacterService>(TeamCharacterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
