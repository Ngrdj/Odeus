import { GetCharacterCharacteristicDto } from './dtos/character/characterCharacteristic/get-character-characteristic.dto';
import { GetCharacterSkillDto } from './dtos/character/characterSkill/get-character-skill.dto';
import { GetPnjCharacteristicDto } from './dtos/pnj/pnjCharacteristic/get-pnj-characteristic.dto';
import { GetPnjSkillDto } from './dtos/pnj/pnjSkill/get-pnj-skill.dto';

export class CharacterSkill{

    constructor(

       public name:string,
       public value:number,
       public bonus:number

    ){}

    static fromDto(charactDto:GetCharacterSkillDto | GetPnjSkillDto):CharacterSkill{

        return new CharacterSkill(charactDto.characteristic.name,charactDto.value,charactDto.bonus)

    }
}
