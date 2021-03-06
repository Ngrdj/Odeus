import { Capacity } from './capacity';
import { CharacterCharacteristic } from './characterCharacteristic';
import { CharacterSkill } from './characterSkill';
import { SizeEnum } from './enums/size.enum';

export abstract class Character {


    constructor(

        public id:number,
        public name:string,
        public portrait:string,
        public resume:string,
        public capacities:Capacity[],
        public characteristics:CharacterCharacteristic[],
        public skills:CharacterSkill[],
        public playable:boolean,
        public size:SizeEnum

    ){}
        
}
