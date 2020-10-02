import { PartialType } from '@nestjs/mapped-types';
import { CreateCharacterCharacteristicDto } from './create-character-characteristic.dto';

export class UpdateCharacterCharacteristicDto extends PartialType(CreateCharacterCharacteristicDto) {}