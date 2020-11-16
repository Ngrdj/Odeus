import { GetUserDto } from '../user/get-user.dto';

export interface CreateTeamDto {

    name:string;
    user:GetUserDto;
    characters:number[]

}