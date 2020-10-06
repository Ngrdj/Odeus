import { Module } from '@nestjs/common';
import { CapacityService } from './capacity.service';
import { CapacityController } from './capacity.controller';
import { Capacity } from './entities/capacity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubClassModule } from 'src/sub-class/sub-class.module';

@Module({
  imports: [TypeOrmModule.forFeature([Capacity]),SubClassModule],
  controllers: [CapacityController],
  providers: [CapacityService],
  exports:[CapacityService]
})
export class CapacityModule {}
