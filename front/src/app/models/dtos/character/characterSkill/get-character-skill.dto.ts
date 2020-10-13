import { GetSkillDto } from '../../skill/get-skill.dto';
import { GetCharacterDto } from '../get-character.dto';

export interface GetCharacterSkillDto {

    id:number;
    bonus:number;
    isChecked:boolean;
    skill:GetSkillDto;
    character:GetCharacterDto;
    
}
