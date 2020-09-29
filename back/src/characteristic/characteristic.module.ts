import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacteristicController } from './characteristic.controller';
import { CharacteristicService } from './characteristic.service';
import { CharacteristicsEntity } from './characteristics.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CharacteristicsEntity])],
    controllers: [CharacteristicController],
    providers: [CharacteristicService],
})
export class CharacteristicModule {}
