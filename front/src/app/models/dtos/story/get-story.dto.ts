import { GetCharacterDto } from '../character/get-character.dto';
import { GetSkillDto } from '../skill/get-skill.dto';

export interface GetStoryDto {

    id:number;
    name:string;
    description:string;
    skills:GetSkillDto[];
    
}
