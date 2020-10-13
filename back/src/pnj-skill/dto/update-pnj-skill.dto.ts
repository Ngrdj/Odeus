import { PartialType } from '@nestjs/mapped-types';
import { CreatePnjSkillDto } from './create-pnj-skill.dto';

export class UpdatePnjSkillDto extends PartialType(CreatePnjSkillDto) {}