import { GetCharacterDto } from '../character/get-character.dto';
import { GetPnjDto } from '../pnj/get-pnj.dto';
import { GetUserDto } from '../user/get-user.dto';

export interface GetTeamDto {

    id:number;
    name:string
    characters:GetCharacterDto[];
    pnjs:GetPnjDto[];
    user:GetUserDto;

}
