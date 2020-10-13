import { GetSubClassDto } from '../subClass/get-sub-class.dto';

export interface GetCapacityDto {

    id:number;
    name:string;
    level:number;
    description:string;
    subClass:GetSubClassDto;

}
