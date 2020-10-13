import { GetSubClassDto } from '../../subClass/get-sub-class.dto';
import { GetCharacterDto } from '../get-character.dto';

export interface GetCharacterSubClassDto {

    id:number;
    value:number;
    subClass:GetSubClassDto;
    character:GetCharacterDto;
    
}
