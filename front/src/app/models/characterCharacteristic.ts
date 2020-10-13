import { GetCharacterCharacteristicDto } from './dtos/character/characterCharacteristic/get-character-characteristic.dto';
import { GetCharacteristicDto } from './dtos/characteristic/get-characteristic.dto';

export class CharacterCharacteristic{

    constructor(

       public name:string,
       public value:number,
       public bonus:number

    ){}

    static fromDto(charactDto:GetCharacterCharacteristicDto):CharacterCharacteristic{

        return new CharacterCharacteristic(charactDto.characteristic.name,charactDto.value,charactDto.bonus)

    }
}
