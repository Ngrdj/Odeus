import { GetClassDto } from './dtos/class/get-class.dto';
import { SubClass } from './subClass';

export class Class {

    constructor(

        public id:number,
        public name:string,
        public subClasses:SubClass[]

    ){}

    static fromDto(classDto:GetClassDto):Class{

        return new Class(

            classDto.id,
            classDto.name,
            classDto.subClass.map(subClass => SubClass.fromDto(subClass))
        
        )

    }

}
