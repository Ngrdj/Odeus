import { Character } from './character';
import { Class } from './class';
import { Behavior } from './enums/behavior.enum';
import { GenderEnum } from './enums/gender.enum';
import { Pj } from './pj';
import { Pnj } from './pnj';
import { Story } from './story';

export class Fighter extends Character{

    private playable:boolean;

    public character:Pj|Pnj

    public initiative:number=0;
    public behavior:Behavior = Behavior.NEUTRAL;

    
 

    constructor(character:Pnj|Pj ,behavior?:Behavior, initiative?:Number){

        super(

            character.id,
            character.name,
            character.portrait,
            character.resume,
            character.capacities,
            character.characteristics,
            character.skills

        )

        if(character instanceof Pnj){

            this.playable = false;
            this.character = character;

        }else{

            this.playable = true;
            this.character = character;
        }

    }

}