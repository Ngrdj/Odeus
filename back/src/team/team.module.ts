import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Team } from './entities/team.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


import { CharacterService } from 'src/character/character.service';
import { Character } from 'src/character/entities/character.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team,Character])],
  controllers: [TeamController],
  providers: [TeamService,CharacterService],
  exports:[TeamService]
})
export class TeamModule {}
