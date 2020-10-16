import { GetCharacterCharacteristicDto } from './dtos/character/characterCharacteristic/get-character-characteristic.dto';
import { GetCharacterSubClassDto } from './dtos/character/characterSubClass/get-character-sub-class.dto';
import { GetPnjCharacteristicDto } from './dtos/pnj/pnjCharacteristic/get-pnj-characteristic.dto';

export class PjSubClass{

    constructor(


    ){}

    static fromDto(characterSubClass:GetCharacterSubClassDto):PjSubClass{

        return new PjSubClass()

    }
}
