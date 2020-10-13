import { CharacteristicEnum } from '../../enums/characteristic.enum';
import { GetCharacterSkillDto } from '../character/characterSkill/get-character-skill.dto';
import { getStoryDto } from '../story/get-story.dto';

export interface GetSkillDto {

    id:number;
    name:string;
    type:CharacteristicEnum;
    stories:GetStoryDto[];
    characterSkills:GetCharacterSkillDto[];
    pnjSkills:GetPnjSkillDto[];
    
}
