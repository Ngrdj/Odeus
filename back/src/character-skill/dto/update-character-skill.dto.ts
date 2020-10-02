import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterSkillDto } from './create-character-skill.dto';

export class UpdateCharacterSkillDto extends PartialType(CreateCharacterSkillDto) {}