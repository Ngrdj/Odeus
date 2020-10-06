import { Module } from '@nestjs/common';
import { CapacityService } from './capacity.service';
import { CapacityController } from './capacity.controller';
import { Capacity } from './entities/capacity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubClassService } from 'src/sub-class/sub-class.service';

@Module({
  imports: [TypeOrmModule.forFeature([Capacity])],
  controllers: [CapacityController],
  providers: [CapacityService,SubClassService]
})
export class CapacityModule {}
