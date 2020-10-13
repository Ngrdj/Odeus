import { Skill } from "src/skill/entities/skill.entity";
import { SizeEnum } from "../size.enum";

export class CreatePnjDto {

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
}