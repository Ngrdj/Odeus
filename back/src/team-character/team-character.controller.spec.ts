import { Test, TestingModule } from '@nestjs/testing';
import { TeamCharacterController } from './team-character.controller';
import { TeamCharacterService } from './team-character.service';

describe('TeamCharacterController', () => {
  let controller: TeamCharacterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamCharacterController],
      providers: [TeamCharacterService],
    }).compile();

    controller = module.get<TeamCharacterController>(TeamCharacterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
