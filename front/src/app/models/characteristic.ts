import { GetCharacteristicDto } from './dtos/characteristic/get-characteristic.dto';

export class Characteristic {

    constructor(

        public id:number,
        public name:string,     

    ){}

    static fromDto(characteristicDto:GetCharacteristicDto):Characteristic{

        return new Characteristic(

            characteristicDto.id,
            characteristicDto.name,
            
        )

    }

}
