import { Character } from "src/character/entities/character.entity";
import { User } from "src/user/entities/user.entity";

export class CreateTeamDto {

    name:string;
    user:User;
    characters:number[]

}