import { GetCharacterDto } from '../character/get-character.dto';
import { GetUserDto } from '../user/get-user.dto';

export interface GetTeamDto {

    id:number;
    name:string
    characters:GetCharacterDto[];
    user:GetUserDto;

}
