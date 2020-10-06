import { CharacteristicsDto } from './dtos/characteristics.dto';

export class Characteristics{

    constructor(

       public id:number,
       public name:string,
       public value:number,
       public bonus:number

    ){}

    static fromDto(charactDto:CharacteristicsDto):Characteristics{

        return new Characteristics(charactDto.id,charactDto.name,charactDto.value,charactDto.bonus)

    }
}
