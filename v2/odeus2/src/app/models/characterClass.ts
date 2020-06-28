import { characterClassEnum } from './characterClassEnum';

export abstract class characterClass{

    className : string | undefined;

    constructor(className:string){ 
        this.className = Object.values(characterClassEnum).find(element => element === className )

        if (this.className){

            this.setClassTraits(this.className)

        }
    }
    setClassTraits(className){

        switch(className){

            case 'ARTIFICER' : 

                break;

            case 'BARBARIAN' : 

                break;

            case 'BARD' : 

                break;

            case 'CLERIC' : 

                break;
                
            case 'DRUID' : 

                break;
                
            case 'FIGHTER' : 

                break;

            case 'MONK' : 

                break;

            case 'PALADIN' : 

                break;

            case 'RANGER' : 

                break;
                
            case 'ROGUE' : 

                break;

            case 'SORCERER' : 

                break;

            case 'WARLOCK' : 

                break;

            case 'WIZARD' : 

                break;

        }

    }
}