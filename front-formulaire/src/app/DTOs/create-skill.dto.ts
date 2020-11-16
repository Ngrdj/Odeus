import { CharacteristicEnum } from '../Enum/characteristic.enum';
import { SkillEnum } from '../Enum/skill.enum';

export class CreateSkillDto {
    name:SkillEnum;
    type:CharacteristicEnum;
}