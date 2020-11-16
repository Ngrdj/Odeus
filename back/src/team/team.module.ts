import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { Team } from './entities/team.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterModule } from 'src/character/character.module';


@Module({
  imports: [TypeOrmModule.forFeature([Team]),CharacterModule],
  controllers: [TeamController],
  providers: [TeamService],
  exports:[TeamService]
})
export class TeamModule {}
