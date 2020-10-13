import { GetCharacteristicDto } from '../../characteristic/get-characteristic.dto';
import { GetCharacterDto } from '../get-character.dto';

export interface GetCharacterCharacteristicDto {

    id:number;
    value:number;
    bonus:number;
    character:GetCharacterDto;
    characteristic:GetCharacteristicDto;

}
