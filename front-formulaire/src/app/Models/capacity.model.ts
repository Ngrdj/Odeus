import { CapacityDto } from '../DTOs/capacity.dto';
import { SubClassEnum } from '../Enum/subClass.enum';

export class CapacityModel {
    constructor(

        public name:string,
        public level:number,
        public description:string,
        public subClass:SubClassEnum,

    ){}

    public toCapacityDto():CapacityDto{
        return{
            name:this.name,
            level:this.level,
            description:this.description,
            subClass:this.subClass
        }
    }
    static fromCapacityDto(capacityDto:CapacityDto):CapacityDto{

        return new CapacityModel(
            capacityDto.name,
            capacityDto.level,
            capacityDto.description,
            capacityDto.subClass
        )
    }
}