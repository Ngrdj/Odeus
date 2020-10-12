import { SubClassDto } from '../DTOs/subClass.dto';
import { ClassEnum } from '../Enum/class.enum';
import { SubClassEnum } from '../Enum/subClass.enum';

export class SubClassModel {
    constructor(
        public name:SubClassEnum,
        public classType:ClassEnum
    ){}

    public toSubClassDto():SubClassDto{
        return{
            name:this.name,
            class:this.classType
        }
    }
    static fromSubClassDto(subClassDto:SubClassDto){
        return new SubClassModel(
            subClassDto.name,
            subClassDto.class
        )
    }
    
}