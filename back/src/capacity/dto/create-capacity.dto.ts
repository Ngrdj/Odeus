import { SubClassEnum } from "src/sub-class/subClass.enum";

export class CreateCapacityDto {

    name:string;
    level:number;
    description:string;
    subClass:SubClassEnum;
}