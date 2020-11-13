import { SubClassEnum } from '../../enums/subClass.enum';
import { GetCapacityDto } from '../capacity/get-capacity.dto';
import { GetCharacterSubClassDto } from '../character/characterSubClass/get-character-sub-class.dto';
import { GetClassDto } from '../class/get-class.dto';

export interface GetSubClassDto {

    id:number;
    name:SubClassEnum;
    capacities:GetCapacityDto[];
    class:GetClassDto;
    characterSubClass:GetCharacterSubClassDto[];
    
}
