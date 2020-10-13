import { ClassEnum } from '../../enums/class.enum';
import { GetSubClassDto } from '../subClass/get-sub-class.dto';

export interface GetClassDto {

    id:number;
    name:ClassEnum;
    subClass:GetSubClassDto[];

}
