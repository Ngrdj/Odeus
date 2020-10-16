import { GetCharacteristicDto } from '../../characteristic/get-characteristic.dto';

export interface GetPnjCharacteristicDto {

    id:number;
    value:number;
    bonus:number;
    characteristic:GetCharacteristicDto
    
}
