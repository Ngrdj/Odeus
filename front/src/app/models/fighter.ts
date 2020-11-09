import { Character } from './character';
import { BehaviorEnum } from './enums/behavior.enum';
import { Pj } from './pj';
import { Pnj } from './pnj';

export class Fighter extends Character{

    private playable:boolean;

    public character:Pj|Pnj

    public initiative:number=0;
    public behavior:BehaviorEnum = BehaviorEnum.NEUTRAL;

    
 

    constructor(character:Pnj|Pj ,behavior?:BehaviorEnum, initiative?:Number){

        super(

            character.id,
            character.name,
            character.portrait,
            character.resume,
            character.capacities,
            character.characteristics,
            character.skills,
            character.isPlayable,

        )
        this.behavior = behavior;
        if(character instanceof Pnj){

            this.playable = false;
            this.character = character;

        }else{

            this.playable = true;
            this.character = character;
        }

    }

}