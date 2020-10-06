import { Module } from '@nestjs/common';
import { SubClassService } from './sub-class.service';
import { SubClassController } from './sub-class.controller';
import { SubClass } from './entities/sub-class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassModule } from 'src/class/class.module';

@Module({
  imports: [TypeOrmModule.forFeature([SubClass]),ClassModule],
  controllers: [SubClassController],
  providers: [SubClassService],
  exports:[SubClassService]
})
export class SubClassModule {}
