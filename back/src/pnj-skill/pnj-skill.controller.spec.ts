import { Test, TestingModule } from '@nestjs/testing';
import { PnjSkillController } from './pnj-skill.controller';
import { PnjSkillService } from './pnj-skill.service';

describe('PnjSkillController', () => {
  let controller: PnjSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PnjSkillController],
      providers: [PnjSkillService],
    }).compile();

    controller = module.get<PnjSkillController>(PnjSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
