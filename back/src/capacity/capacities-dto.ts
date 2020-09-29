import { CharacterCapacitiesEntity } from "src/CharacterCapacities/characterCapacities.entity";
import { ClassEntity } from "src/class/classCharacter.entity";

export class CapacitiesDto {

    id:number;
    name:string;
    value:number;
    description:string;
    class:ClassEntity;
    type:string;
    level:number;

}
