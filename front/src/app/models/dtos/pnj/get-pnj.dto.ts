import { SizeEnum } from '../../enums/size.enum';
import { GetCapacityDto } from '../capacity/get-capacity.dto';
import { GetPnjCharacteristicDto } from './pnjCharacteristic/get-pnj-characteristic.dto';
import { GetPnjSkillDto } from './pnjSkill/get-pnj-skill.dto';

export interface GetPnjDto {

    id:number;
    name:string;
    size:SizeEnum;
    resume:string;
    portrait:string;
    pnjCharacteristics:GetPnjCharacteristicDto[];
    pnjSkills:GetPnjSkillDto[];
    pnjCapacities:GetCapacityDto[];
    
}
