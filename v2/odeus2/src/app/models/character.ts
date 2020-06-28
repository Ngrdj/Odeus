import { characterRace } from './characterRace';
import { characterClass } from './characterClass';

export abstract class Character{

    name : string;
    race : characterRace;
    class : characterClass;

    portrait : string;

    //characteristics
    strength : number = 0;
    dexterity : number = 0;
    constitution : number = 0;
    intelligence : number = 0;
    wisdom : number = 0;
    charisma : number = 0;

    constructor(
        newName : string,
        newRace : characterRace,
        newClass : characterClass 
    ){

        this.name = newName;
        this.race = newRace;
        this.class = newClass;

     }

}