import { Module } from '@nestjs/common';
import { PnjCharacteristicService } from './pnj-characteristic.service';
import { PnjCharacteristicController } from './pnj-characteristic.controller';

@Module({
  controllers: [PnjCharacteristicController],
  providers: [PnjCharacteristicService]
})
export class PnjCharacteristicModule {}
