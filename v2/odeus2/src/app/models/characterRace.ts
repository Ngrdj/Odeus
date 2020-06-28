import { characterRaceEnum } from './characterRaceEnum';

export abstract class characterRace{

    raceName : string | undefined

    constructor(raceName:string ){ 
        this.raceName = Object.values(characterRaceEnum).find(element => element === raceName )

        if (this.raceName){

            this.setRacialTraits(this.raceName)

        }
    }
    setRacialTraits(raceName){

        switch(raceName){

            case 'AARAKOCRA' : 

                break;

            case 'AASIMAR' : 

                break;

            case 'AETHERBORN' : 

                break;

            case 'BUGBEAR' : 

                break;
                
            case 'CENTAUR' : 

                break;
                
            case 'CHANGELING' : 

                break;

            case 'DRAGONBORN' : 

                break;

            case 'DWARF' : 

                break;

            case 'ELF' : 

                break;
                
            case 'FIRBOLG' : 

                break;

            case 'GENASI' : 

                break;

            case 'GITH' : 

                break;

            case 'GNOME' : 

                break;

            case 'GOBLIN' : 

                break;
                
            case 'GOLIATH' : 

                break;

            case 'HALF-ELF' : 

                break;

            case 'HALF-ORC' : 

                break;

            case 'HALFLING' : 

                break;

            case 'HOBGOBLIN' : 

                break;
                
            case 'HUMAN' : 

                break;

            case 'KENKU' : 

                break;

            case 'KOBOLD' : 

                break;

            case 'KOR' : 

                break;

            case 'LIZARDFOLK' : 

                break;
                
            case 'LOXODON' : 

                break;

            case 'MERFOLK' : 

                break;

            case 'MINOTAUR' : 

                break;

            case 'ORC' : 

                break;

            case 'SHIFTER' : 

                break;
                
            case 'SIMIC HYBRID' : 

                break;

            case 'TABAXI' : 

                break;

            case 'TIEFLING' : 

                break;

            case 'TRITON' : 

                break;

            case 'VAMPIRE' : 

                break;
                
            case 'VEDALKEN' : 

                break;

            case 'WARFORGED' : 

                break;

            case 'YUAN-TI' : 

        }

    }
}