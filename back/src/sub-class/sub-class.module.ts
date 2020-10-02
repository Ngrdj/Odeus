import { Module } from '@nestjs/common';
import { SubClassService } from './sub-class.service';
import { SubClassController } from './sub-class.controller';

@Module({
  controllers: [SubClassController],
  providers: [SubClassService]
})
export class SubClassModule {}
