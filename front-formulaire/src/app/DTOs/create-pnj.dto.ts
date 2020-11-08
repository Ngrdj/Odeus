import { SizeEnum } from '../Enum/size.enum';
import { TypeEnum } from '../Enum/type.enum';
import { Skill } from '../Models/skill.model';

export class CreatePnj{
    name:string;
    size:SizeEnum;
    strength:number;
    dexterity:number;
    constitution:number;
    intelligence:number;
    wisdom:number;
    charisma:number;
    skills:Skill[];
    resume:string;
    portrait:string;
    type:TypeEnum;
}