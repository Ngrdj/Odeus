import { PartialType } from '@nestjs/mapped-types';
import { SubClassEnum } from 'src/sub-class/subClass.enum';
import { CreateCapacityDto } from './create-capacity.dto';

export class UpdateCapacityDto extends PartialType(CreateCapacityDto) {
    
}