import { Test, TestingModule } from '@nestjs/testing';
import { PnjCharacteristicService } from './pnj-characteristic.service';

describe('PnjCharacteristicService', () => {
  let service: PnjCharacteristicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PnjCharacteristicService],
    }).compile();

    service = module.get<PnjCharacteristicService>(PnjCharacteristicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
