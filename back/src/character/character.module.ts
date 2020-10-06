import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { Character } from './entities/character.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterSubClassService } from '../character-sub-class/character-sub-class.service';
import { CharacterCharacteristicService } from '../character-characteristic/character-characteristic.service';
import { CharacteristicService } from '../characteristic/characteristic.service';
import { ClassService } from '../class/class.service';
import { CharacterSkill } from '../character-skill/entities/character-skill.entity';
import { TeamCharacter } from '../team-character/entities/team-character.entity';
import { SubClassService } from 'src/sub-class/sub-class.service';

@Module({
  imports: [TypeOrmModule.forFeature([Character])],
  controllers: [
    CharacterController
  ],
  providers: [
    CharacterService,
    ClassService,
    SubClassService,
    CharacteristicService,
    CharacterSubClassService,
    CharacterCharacteristicService,
    CharacterSkill,
    TeamCharacter
  ]
})
export class CharacterModule {}
