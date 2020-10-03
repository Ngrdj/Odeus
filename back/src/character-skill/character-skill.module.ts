import { Module } from '@nestjs/common';
import { CharacterSkillService } from './character-skill.service';
import { CharacterSkillController } from './character-skill.controller';
import { CharacterSkill } from './entities/character-skill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterSkill])],
  controllers: [CharacterSkillController],
  providers: [CharacterSkillService]
})
export class CharacterSkillModule {}
