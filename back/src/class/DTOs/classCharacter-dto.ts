import { CapacitiesDto } from "src/Static/capacity/capacities-dto";
import { CharacteristicDto } from "src/Static/characteristic/characteristic-dto";

export class ClassCharacterDto {
    id:number;
    label:string;
    characteristics:CharacteristicDto[];
    capacities:CapacitiesDto[];
}
