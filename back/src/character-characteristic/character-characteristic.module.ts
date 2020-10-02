import { Module } from '@nestjs/common';
import { CharacterCharacteristicService } from './character-characteristic.service';
import { CharacterCharacteristicController } from './character-characteristic.controller';

@Module({
  controllers: [CharacterCharacteristicController],
  providers: [CharacterCharacteristicService]
})
export class CharacterCharacteristicModule {}
