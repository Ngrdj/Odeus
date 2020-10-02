import { Test, TestingModule } from '@nestjs/testing';
import { CharacterCharacteristicService } from './character-characteristic.service';

describe('CharacterCharacteristicService', () => {
  let service: CharacterCharacteristicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterCharacteristicService],
    }).compile();

    service = module.get<CharacterCharacteristicService>(CharacterCharacteristicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
