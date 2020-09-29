import { CharacterCapacitiesEntity } from "src/CharacterCapacities/characterCapacities.entity";
import { ClassCharacterEntity } from "src/class/classCharacter.entity";

export class CapacitiesDto {

    id:number;
    name:string;
    value:number;
    description:string;
    class:ClassCharacterEntity;
    type:string;
    level:number;

}
