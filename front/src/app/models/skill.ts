import { GetSkillDto } from './dtos/skill/get-skill.dto';
import { CharacteristicEnum } from './enums/characteristic.enum';

export class Skill {

    constructor(

        public id:number,
        public name:string,
        public type:CharacteristicEnum,

    ){}

    static fromDto(skillDto:GetSkillDto):Skill{

        return new Skill(

            skillDto.id,
            skillDto.name,
            skillDto.type

        )

    }

}
