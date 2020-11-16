import { StatusEnum } from '../../enums/status.enum';
import { GetCharacterDto } from '../character/get-character.dto';
import { GetTeamDto } from '../team/get-team.dto';

export interface GetUserDto {

    id:number;
    name:string;
    login:string;
    password:string;
    role:StatusEnum;
    email:string;
    characters:GetCharacterDto[];
    team:GetTeamDto[];

}
