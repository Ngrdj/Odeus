import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { Character } from './entities/character.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterSubClassService } from '../character-sub-class/character-sub-class.service';
import { CharacterCharacteristicService } from '../character-characteristic/character-characteristic.service';
import { CharacterSkill } from '../character-skill/entities/character-skill.entity';
import { ClassModule } from 'src/class/class.module';
import { SubClassModule } from 'src/sub-class/sub-class.module';
import { CharacteristicModule } from 'src/characteristic/characteristic.module';
import { CharacterSubClass } from 'src/character-sub-class/entities/character-sub-class.entity';
import { CharacterCharacteristic } from 'src/character-characteristic/entities/character-characteristic.entity';
import { CharacterSkillService } from 'src/character-skill/character-skill.service';
import { StoryModule } from 'src/story/story.module';
import { SkillModule } from 'src/skill/skill.module';
import { RaceModule } from 'src/race/race.module';
import { UserModule } from 'src/user/user.module';
import { TeamModule } from 'src/team/team.module';

@Module({
  imports: [TypeOrmModule.forFeature([Character,CharacterSubClass,CharacterCharacteristic,CharacterSkill]),ClassModule,SubClassModule,CharacteristicModule,StoryModule,SkillModule,RaceModule,UserModule],
  controllers: [
    CharacterController
  ],
  providers: [
    CharacterService,
    CharacterSubClassService,
    CharacterCharacteristicService,
    CharacterSkillService,
  ],
  exports:[CharacterService]

})
export class CharacterModule {}
