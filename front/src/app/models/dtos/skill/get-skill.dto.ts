import { CharacteristicEnum } from '../../enums/characteristic.enum';
import { GetCharacterSkillDto } from '../character/characterSkill/get-character-skill.dto';
import { GetPnjSkillDto } from '../pnj/pnjSkill/get-pnj-skill.dto';
import { GetStoryDto } from '../story/get-story.dto';

export interface GetSkillDto {

    id:number;
    name:string;
    type:CharacteristicEnum;
    stories:GetStoryDto[];
    characterSkills:GetCharacterSkillDto[];
    pnjSkills:GetPnjSkillDto[];
    
}
