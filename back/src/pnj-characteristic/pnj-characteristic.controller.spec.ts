import { Test, TestingModule } from '@nestjs/testing';
import { PnjCharacteristicController } from './pnj-characteristic.controller';
import { PnjCharacteristicService } from './pnj-characteristic.service';

describe('PnjCharacteristicController', () => {
  let controller: PnjCharacteristicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PnjCharacteristicController],
      providers: [PnjCharacteristicService],
    }).compile();

    controller = module.get<PnjCharacteristicController>(PnjCharacteristicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
