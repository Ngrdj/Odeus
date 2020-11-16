import { Capacity } from './capacity';
import { Character } from './character';
import { CharacterCharacteristic } from './characterCharacteristic';
import { CharacterSkill } from './characterSkill';
import { CreateCharacterDto } from './dtos/character/create-character.dto';
import { GetCharacterDto } from './dtos/character/get-character.dto';
import { AlignmentEnum } from './enums/alignment.enum';
import { CharacteristicEnum } from './enums/characteristic.enum';
import { ClassEnum } from './enums/class.enum';
import { GenderEnum } from './enums/gender.enum';
import { SizeEnum } from './enums/size.enum';
import { PjSubClass } from './pjSubClass';
import { Race } from './race';
import { Story } from './story';
import { User } from './user';


export class Pj extends Character {

    constructor(

        public id:number,
        public name:string,
        public portrait:string,
        public race:Race,
        public level:number,
        public characteristics:CharacterCharacteristic[],
        public className:ClassEnum,
        public subClasses:PjSubClass[],
        public capacities:Capacity[],
        public skills:CharacterSkill[],
        public story:Story,
        public resume:string,
        public size:SizeEnum,
        public age:number,
        public gender:GenderEnum,
        public user:User,
        public alignment:AlignmentEnum

    ){

        super(

            id,
            name,
            portrait,
            resume,
            capacities,
            characteristics,
            skills,
            true,
            size

        )

    }

    static fromDto(characterDto:GetCharacterDto):Pj{

        const characterCapacities=[];
        characterDto.characterSubClass
        .forEach(charSubClass => charSubClass.subClass.capacities
            .forEach(capacity =>{
                if(capacity.level===characterDto.level){
                    characterCapacities.push(Capacity.fromDto(capacity))
                }
            })
        )

        return new Pj(

            characterDto.id,
            characterDto.name,
            characterDto.portrait,
            Race.fromDto(characterDto.race),
            characterDto.level,
            characterDto.characterCharacteristics.map(charact => CharacterCharacteristic.fromDto(charact) ),
            characterDto.className,
            characterDto.characterSubClass.map(subClass => PjSubClass.fromDto(subClass)),
            characterCapacities,
            characterDto.characterSkills.map(charSkill => CharacterSkill.fromDto(charSkill)),
            characterDto.story,
            characterDto.resume,
            characterDto.size,
            characterDto.age,
            characterDto.gender,
            User.fromDto(characterDto.user),
            characterDto.alignment
            
        )

    }

    toCreateDto():CreateCharacterDto{

        return {

            name:this.name,
            class:this.className,
            subClasses:this.subClasses.map(subClass => subClass.toCreateDto()),
            race:this.race.name,
            level:this.level,
            strength:this.characteristics.find(characteristic => characteristic.name === CharacteristicEnum.STRENGTH).value,
            dexterity:this.characteristics.find(characteristic => characteristic.name === CharacteristicEnum.DEXTERITY).value,
            constitution:this.characteristics.find(characteristic => characteristic.name === CharacteristicEnum.CONSTITUTION).value,
            intelligence:this.characteristics.find(characteristic => characteristic.name === CharacteristicEnum.INTELLIGENCE).value,
            wisdom:this.characteristics.find(characteristic => characteristic.name === CharacteristicEnum.WISDOM).value,
            charisma:this.characteristics.find(characteristic => characteristic.name === CharacteristicEnum.CHARISMA).value,
            resume:this.resume,
            size:this.size,
            portrait:this.portrait,
            alignment:this.alignment,
            story:this.story.name,
            gender:this.gender,
            age:this.age

        }

    }

}
