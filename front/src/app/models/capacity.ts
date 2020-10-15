import { GetCapacityDto } from './dtos/capacity/get-capacity.dto';

export class Capacity {

    constructor(

        public id:number,
        public name:string,
        public level:number,
        public description:string,

    ){}

    static fromDto(capacityDto:GetCapacityDto):Capacity{

        return new Capacity(

            capacityDto.id,
            capacityDto.name,
            capacityDto.level,
            capacityDto.description,            

        )

    }

}
