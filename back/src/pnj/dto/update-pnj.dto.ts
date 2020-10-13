import { PartialType } from '@nestjs/mapped-types';
import { CreatePnjDto } from './create-pnj.dto';

export class UpdatePnjDto extends PartialType(CreatePnjDto) {}