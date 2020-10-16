import { GetCharacterCharacteristicDto } from './dtos/character/characterCharacteristic/get-character-characteristic.dto';
import { GetPnjCharacteristicDto } from './dtos/pnj/pnjCharacteristic/get-pnj-characteristic.dto';

export class CharacterCharacteristic{

    constructor(

       public name:string,
       public value:number,
       public bonus:number

    ){}

    static fromDto(charactDto:GetCharacterCharacteristicDto | GetPnjCharacteristicDto):CharacterCharacteristic{

        return new CharacterCharacteristic(charactDto.characteristic.name,charactDto.value,charactDto.bonus)

    }
}
