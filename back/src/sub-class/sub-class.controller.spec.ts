import { Test, TestingModule } from '@nestjs/testing';
import { SubClassController } from './sub-class.controller';
import { SubClassService } from './sub-class.service';

describe('SubClassController', () => {
  let controller: SubClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubClassController],
      providers: [SubClassService],
    }).compile();

    controller = module.get<SubClassController>(SubClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
