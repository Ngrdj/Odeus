import { Module } from '@nestjs/common';
import { TeamCharacterService } from './team-character.service';
import { TeamCharacterController } from './team-character.controller';

@Module({
  controllers: [TeamCharacterController],
  providers: [TeamCharacterService]
})
export class TeamCharacterModule {}
