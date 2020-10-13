import { CharacterCharacteristic } from './characterCharacteristic';
import { GetCharacterDto } from './dtos/character/get-character.dto';


export class Character {

    constructor(

        public id:number,
        public name:string,
        public portrait?:string,
        public characteristics?:CharacterCharacteristic[]
        

    ){}

    static fromDto(characterDto:GetCharacterDto){

        return new Character(

            characterDto.id,
            characterDto.name,
            characterDto.portrait,
            characterDto.characterCharacteristics.map(charact => CharacterCharacteristic.fromDto(charact))
            

        )

    }

}
