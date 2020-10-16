import { Capacity } from './capacity';
import { CharacterCharacteristic } from './characterCharacteristic';
import { CharacterSkill } from './characterSkill';

export abstract class Character {

    constructor(

        public id:number,
        public name:string,
        public portrait:string,
        public resume:string,
        public capacities:Capacity[],
        public characteristics:CharacterCharacteristic[],
        public skills:CharacterSkill[]

    ){}

}
