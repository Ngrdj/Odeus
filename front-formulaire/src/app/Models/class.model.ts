import { ClassDto } from '../DTOs/create-class.dto'

export class ClassModel{
    constructor(
        public name:string
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