import { CreateCharacterSubClassDto } from "src/character-sub-class/dto/create-character-sub-class.dto";
import { ClassEnum } from "src/class/class.enum";
import { RaceEnum } from "src/race/race.enum";
import { StoryEnum } from "src/story/story.enum";
import { AlignmentEnum } from "./alignment.enum";
import { GenderEnum } from "./gender.enum";

export class CreateCharacterDto {
    name:string;
    class:ClassEnum;
    subClasses:CreateCharacterSubClassDto[];
    race:RaceEnum;
    level:number;
    strength:number;
    dexterity:number;
    constitution:number;
    intelligence:number;
    wisdom:number;
    charisma:number;
    resume:string;
    portrait:string;
    alignment:AlignmentEnum;
    story:StoryEnum;
    gender:GenderEnum;
    age:number;

}