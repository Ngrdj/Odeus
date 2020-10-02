import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterSubClassDto } from './create-character-sub-class.dto';

export class UpdateCharacterSubClassDto extends PartialType(CreateCharacterSubClassDto) {}