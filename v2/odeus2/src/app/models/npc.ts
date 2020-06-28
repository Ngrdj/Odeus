import { Character } from './character';
import { characterRace } from './characterRace';
import { characterClass } from './characterClass';

export class nonPlayableCharacter extends Character{


    constructor(

        newName : string,
        newRace : characterRace,
        newClass : characterClass 
        
    ){

        super(newName,newRace,newClass);

     }
        

}