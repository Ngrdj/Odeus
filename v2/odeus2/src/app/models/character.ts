import { characterRace } from './characterRace';
import { characterClass } from './characterClass';

export abstract class Character{

   private initiative:number = 0;

    private characteristics = {

        strength : 0,
        dexterity : 0,
        constitution : 0,
        intelligence : 0,
        wisdom : 0,
        charisma : 0,

    }

    constructor(

        private charName : string,
        private charRace : characterRace,
        private charClass : characterClass,
        private portrait : string = 'default.jpg'

    ){}

     getName(){

        return this.charName

     }
     getRace(){

        return this.charRace

     }
     getClass(){

        return this.charClass

     }
     getPortrait(){

        return this.portrait

     }
     getCharact(){

        return this.characteristics

     }
     getInitiative(){

      return this.initiative

   }
   setInitiative(newInit:number){

      this.initiative = newInit;

   }
     
}