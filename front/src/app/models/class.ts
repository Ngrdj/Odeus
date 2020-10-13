import { GetClassDto } from './dtos/class/get-class.dto';

export class Class {

    constructor(

        public id:number,
        public name:string,
        public subClass:SubClass[]

    ){}

    static fromDto(classDto:GetClassDto):Class{

        return new Class(

            classDto.id,
            classDto.name,
            classDto.subClass.map(value => SubClass.fromDto(capacityDto.subClass))
        
        )

    }

}
