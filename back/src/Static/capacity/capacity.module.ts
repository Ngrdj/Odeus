import { CapacityController } from './capacity.controller';
import { CapacityService } from './capacity.service';
import { Module } from '@nestjs/common';
import { CapacitiesEntity } from './capacities.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CapacitiesEntity])],
    controllers: [CapacityController,],
    providers: [CapacityService,],
})
export class CapacityModule { }
