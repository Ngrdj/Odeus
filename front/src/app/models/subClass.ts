import { Capacity } from './capacity';
import { Class } from './class';
import { GetSubClassDto } from './dtos/subClass/get-sub-class.dto';

export class SubClass {

    constructor(

        public id:number,
        public name:string,
        public capacities:Capacity[],
        public classInfos:Class,


    ){}

    static fromDto(subClassDto:GetSubClassDto):SubClass{

        return new SubClass(

            subClassDto.id,
            subClassDto.name,
            subClassDto.capacities.map(capacity => Capacity.fromDto(capacity)),
            Class.fromDto(subClassDto.class)

        )

    }

}
