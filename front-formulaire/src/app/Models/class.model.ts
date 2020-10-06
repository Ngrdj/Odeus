import { ClassDto } from '../DTOs/class.dto'
import { ClassEnum } from '../Enum/class.enum'

export class ClassModel{
    constructor(
        public name:ClassEnum
    ){}


    public toClassDto():ClassDto{
        return {
            name:this.name
        }
    }


    static fromClassDto(classDto:ClassDto){
        return new ClassModel(

            classDto.name
        )
    }
}