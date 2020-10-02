import { Module } from '@nestjs/common';
import { CharacterSkillService } from './character-skill.service';
import { CharacterSkillController } from './character-skill.controller';

@Module({
  controllers: [CharacterSkillController],
  providers: [CharacterSkillService]
})
export class CharacterSkillModule {}
