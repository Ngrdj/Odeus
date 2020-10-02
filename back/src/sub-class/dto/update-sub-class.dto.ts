import { PartialType } from '@nestjs/mapped-types';
import { CreateSubClassDto } from './create-sub-class.dto';

export class UpdateSubClassDto extends PartialType(CreateSubClassDto) {}