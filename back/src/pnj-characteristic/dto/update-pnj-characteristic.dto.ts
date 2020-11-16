import { PartialType } from '@nestjs/mapped-types';
import { CreatePnjCharacteristicDto } from './create-pnj-characteristic.dto';

export class UpdatePnjCharacteristicDto extends PartialType(CreatePnjCharacteristicDto) {}