import { ClassDto } from './class.dto';

export interface CapacitiesGetDto {

    id:number,
    name:string,
    description:number,
    class:ClassDto,
    type:string,
    level:number

}
export interface CapacitiesPostDto {

    idCapacity:number,
    label:string,
    value:number

}
