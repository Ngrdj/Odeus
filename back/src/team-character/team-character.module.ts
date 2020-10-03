import { Module } from '@nestjs/common';
import { TeamCharacterService } from './team-character.service';
import { TeamCharacterController } from './team-character.controller';
import { TeamCharacter } from './entities/team-character.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TeamCharacter])],
  controllers: [TeamCharacterController],
  providers: [TeamCharacterService]
})
export class TeamCharacterModule {}
