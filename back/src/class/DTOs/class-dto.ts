import { CapacitiesDto } from "src/capacity/capacities-dto";
import { CharacteristicsDto } from "src/characteristic/characteristics-dto";

export class ClassDto {
    id:number;
    label:string;
    characteristics:CharacteristicsDto[];
    capacities:CapacitiesDto[];
}
