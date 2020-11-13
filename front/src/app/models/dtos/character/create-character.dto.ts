import { AlignmentEnum } from '../../enums/alignment.enum';
import { ClassEnum } from '../../enums/class.enum';
import { GenderEnum } from '../../enums/gender.enum';
import { RaceEnum } from '../../enums/race.enum';
import { SizeEnum } from '../../enums/size.enum';
import { StoryEnum } from '../../enums/story.enum';
import { CreateCharacterSubClassDto } from './characterSubClass/create-character-sub-class.dto';

export interface CreateCharacterDto {
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
    size:SizeEnum;
    portrait:string;
    alignment:AlignmentEnum;
    story:StoryEnum;
    gender:GenderEnum;
    age:number;

}