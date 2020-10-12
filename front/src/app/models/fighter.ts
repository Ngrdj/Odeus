import { Character } from './character';
import { Behavior } from './enums/behavior.enum';

export class Fighter extends Character{

    public initiative:number=0;
    public behavior:Behavior = Behavior.NEUTRAL;

    constructor(public id:number, public name:string,public portrait:string){

        super(id,name,portrait)

    }

    static fromCharacter(character:Character){

        return new Fighter(character.id,character.name,character.portrait)

    }
}