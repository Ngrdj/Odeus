import { CharacteristicEnum } from "src/characteristic/characteristic.enum";
import { SkillEnum } from "../skill.enum";

export class CreateSkillDto {
    name:SkillEnum;
    type:CharacteristicEnum;
}