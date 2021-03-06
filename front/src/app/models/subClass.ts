import { Capacity } from './capacity';
import { Class } from './class';
import { GetSubClassDto } from './dtos/subClass/get-sub-class.dto';
import { SubClassEnum } from './enums/subClass.enum';

export class SubClass {

    constructor(

        public id:number,
        public name:SubClassEnum,
        public capacities:Capacity[],

    ){}

    static fromDto(subClassDto:GetSubClassDto):SubClass{

        return new SubClass(

            subClassDto.id,
            subClassDto.name,
            subClassDto.capacities.map(capacity => Capacity.fromDto(capacity)),

        )

    }

}
