import { Module } from '@nestjs/common';
import { CharacterCharacteristicService } from './character-characteristic.service';
import { CharacterCharacteristicController } from './character-characteristic.controller';
import { CharacterCharacteristic } from './entities/character-characteristic.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterCharacteristic])],
  controllers: [CharacterCharacteristicController],
  providers: [CharacterCharacteristicService]
})
export class CharacterCharacteristicModule {}
