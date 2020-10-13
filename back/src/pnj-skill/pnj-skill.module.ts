import { Module } from '@nestjs/common';
import { PnjSkillService } from './pnj-skill.service';
import { PnjSkillController } from './pnj-skill.controller';

@Module({
  controllers: [PnjSkillController],
  providers: [PnjSkillService]
})
export class PnjSkillModule {}
