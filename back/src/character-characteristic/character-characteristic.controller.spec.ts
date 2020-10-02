import { Test, TestingModule } from '@nestjs/testing';
import { CharacterCharacteristicController } from './character-characteristic.controller';
import { CharacterCharacteristicService } from './character-characteristic.service';

describe('CharacterCharacteristicController', () => {
  let controller: CharacterCharacteristicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterCharacteristicController],
      providers: [CharacterCharacteristicService],
    }).compile();

    controller = module.get<CharacterCharacteristicController>(CharacterCharacteristicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
