import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamCharacterDto } from './create-team-character.dto';

export class UpdateTeamCharacterDto extends PartialType(CreateTeamCharacterDto) {}