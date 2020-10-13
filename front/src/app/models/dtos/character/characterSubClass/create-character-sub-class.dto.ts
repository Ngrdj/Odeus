import { SubClassEnum } from 'src/app/models/enums/subClass.enum';

export interface CreateCharacterSubClassDto {

    name:SubClassEnum;
    value:number;
}