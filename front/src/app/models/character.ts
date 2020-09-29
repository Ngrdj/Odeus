import { Characteristics } from './characteristics';
import { CharacterGetDto } from './dtos/character.dto';

export class Character {

    constructor(

        public id:number,
        public name:string,
        public characteristics?:Characteristics[],
        public portrait?:string

    ){}

    static fromDto(characterDto:CharacterGetDto){

        return new Character(

            characterDto.id,
            characterDto.name,
            characterDto.characteristics.map(charact => Characteristics.fromDto(charact)),
            characterDto.portrait

        )

    }

}
