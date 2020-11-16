import { GetCharacterSkillDto } from './dtos/character/characterSkill/get-character-skill.dto';
import { GetPnjSkillDto } from './dtos/pnj/pnjSkill/get-pnj-skill.dto';
import { Skill } from './skill';

export class CharacterSkill{

    constructor(

       public id:number,
       public bonus:number,
       public isChecked:boolean,
       public skill:Skill

    ){}

    static fromDto(charactDto:GetCharacterSkillDto | GetPnjSkillDto):CharacterSkill{

        return new CharacterSkill(charactDto.id,charactDto.bonus,charactDto.isChecked,Skill.fromDto(charactDto.skill))

    }
}
