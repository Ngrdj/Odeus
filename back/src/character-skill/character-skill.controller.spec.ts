import { Test, TestingModule } from '@nestjs/testing';
import { CharacterSkillController } from './character-skill.controller';
import { CharacterSkillService } from './character-skill.service';

describe('CharacterSkillController', () => {
  let controller: CharacterSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterSkillController],
      providers: [CharacterSkillService],
    }).compile();

    controller = module.get<CharacterSkillController>(CharacterSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
