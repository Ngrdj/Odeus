import { CreateCharacterSubClassDto } from './dtos/character/characterSubClass/create-character-sub-class.dto';
import { GetCharacterSubClassDto } from './dtos/character/characterSubClass/get-character-sub-class.dto';
import { SubClass } from './subClass';

export class PjSubClass{

    constructor(

       public id:number,
       public value:number,
       public subClass:SubClass

    ){}

    static fromDto(characterSubClass:GetCharacterSubClassDto):PjSubClass{

        return new PjSubClass(characterSubClass.id,characterSubClass.value,characterSubClass.subClass)

    }

    toCreateDto():CreateCharacterSubClassDto{

        return {

            name:this.subClass.name,
            value:this.value

        }

    }
}
