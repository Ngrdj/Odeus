import { StoryEnum } from '../../enums/story.enum';
import { GetCharacterDto } from '../character/get-character.dto';
import { GetSkillDto } from '../skill/get-skill.dto';

export interface GetStoryDto {

    id:number;
    name:StoryEnum;
    description:string;
    skills:GetSkillDto[];
    
}
