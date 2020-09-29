import { CapacitiesDto } from "src/capacity/capacities-dto";
import { CharacteristicDto } from "src/characteristic/characteristic-dto";

export class ClassCharacterDto {
    id:number;
    label:string;
    characteristics:CharacteristicDto[];
    capacities:CapacitiesDto[];
}
