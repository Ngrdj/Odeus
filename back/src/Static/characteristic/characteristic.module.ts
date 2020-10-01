import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacteristicController } from './characteristic.controller';
import { CharacteristicService } from './characteristic.service';
import { CharacteristicEntity } from './characteristic.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CharacteristicEntity])],
    controllers: [CharacteristicController],
    providers: [CharacteristicService],
})
export class CharacteristicModule {}
