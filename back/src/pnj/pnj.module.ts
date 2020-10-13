import { Module } from '@nestjs/common';
import { PnjService } from './pnj.service';
import { PnjController } from './pnj.controller';

@Module({
  controllers: [PnjController],
  providers: [PnjService]
})
export class PnjModule {}
