import { Module } from '@nestjs/common';
import { CharacteristicService } from './characteristic.service';
import { CharacteristicController } from './characteristic.controller';
import { Characteristic } from './entities/characteristic.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Characteristic])],
  controllers: [CharacteristicController],
  providers: [CharacteristicService],
  exports:[CharacteristicService]
})
export class CharacteristicModule {}
