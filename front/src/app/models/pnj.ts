import { Capacity } from './capacity';
import { Character } from './character';
import { CharacterCharacteristic } from './characterCharacteristic';
import { CharacterSkill } from './characterSkill';
import { GetPnjDto } from './dtos/pnj/get-pnj.dto';


export class Pnj extends Character {

    constructor(

        public id:number,
        public name:string,
        public portrait:string,
        public characteristics:CharacterCharacteristic[],
        public capacities:Capacity[],
        public skills:CharacterSkill[],
        public resume:string,

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

    static fromDto(pnjDto:GetPnjDto):Pnj{

        return new Pnj(

            pnjDto.id,
            pnjDto.name,
            pnjDto.portrait,
            pnjDto.pnjCharacteristics.map(charact => CharacterCharacteristic.fromDto(charact) ),
            pnjDto.pnjCapacities.map(capacity => Capacity.fromDto(capacity)),
            pnjDto.pnjSkills.map(pnjSkill => CharacterSkill.fromDto(pnjSkill)),
            pnjDto.resume
            
        )

    }

}
