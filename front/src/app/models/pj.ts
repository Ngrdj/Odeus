import { Capacity } from './capacity';
import { Character } from './character';
import { CharacterCharacteristic } from './characterCharacteristic';
import { CharacterSkill } from './characterSkill';
import { GetCharacterDto } from './dtos/character/get-character.dto';
import { ClassEnum } from './enums/class.enum';
import { GenderEnum } from './enums/gender.enum';
import { PjSubClass } from './pjSubClass';
import { Story } from './story';
import { User } from './user';


export class Pj extends Character {

    constructor(

        public id:number,
        public name:string,
        public portrait:string,
        public level:number,
        public characteristics:CharacterCharacteristic[],
        public className:ClassEnum,
        public subClasses:PjSubClass[],
        public capacities:Capacity[],
        public skills:CharacterSkill[],
        public story:Story,
        public resume:string,
        public age:number,
        public gender:GenderEnum,
        public user:User,

    ){

        super(

            id,
            name,
            portrait,
            resume,
            capacities,
            characteristics,
            skills

        )

    }

    static fromDto(characterDto:GetCharacterDto):Pj{

        const characterCapacities=[];
        characterDto.characterSubClass
        .forEach(charSubClass => charSubClass.subClass.capacities
            .forEach(capacity => characterCapacities.push(Capacity.fromDto(capacity)))
        )

        return new Pj(

            characterDto.id,
            characterDto.name,
            characterDto.portrait,
            characterDto.level,
            characterDto.characterCharacteristics.map(charact => CharacterCharacteristic.fromDto(charact) ),
            characterDto.className,
            characterDto.characterSubClass.map(subClass => PjSubClass.fromDto(subClass)),
            characterCapacities,
            characterDto.characterSkills.map(charSkill => CharacterSkill.fromDto(charSkill)),
            characterDto.story,
            characterDto.resume,
            characterDto.age,
            characterDto.gender,
            User.fromDto(characterDto.user)
            
        )

    }

}
