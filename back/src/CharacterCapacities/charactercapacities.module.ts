import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterCapacitiesController } from './charactercapacities.controller';
import { CharacterCapacitiesEntity } from './characterCapacities.entity';
import { CharacterCapacitiesService } from './charactercapacities.service';

@Module({
    imports: [TypeOrmModule.forFeature([CharacterCapacitiesEntity])],
    controllers: [CharacterCapacitiesController],
    providers: [CharacterCapacitiesService],
})
export class CharacterCapacitiesModule { }
