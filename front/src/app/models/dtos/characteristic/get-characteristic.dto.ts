import { GetCharacterCharacteristicDto } from '../character/characterCharacteristic/get-character-characteristic.dto';
import { GetPnjCharacteristicDto } from '../pnj/pnjCharacteristic/get-pnj-characteristic.dto';

export interface GetCharacteristicDto {

    id:number;
    name:string;
    characterCharacteristics:GetCharacterCharacteristicDto[];
    pnjCharacteristics:GetPnjCharacteristicDto[];

}
