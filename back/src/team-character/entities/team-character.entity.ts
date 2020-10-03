import { Character } from "src/character/entities/character.entity";
import { Team } from "src/team/entities/team.entity";
import { ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class TeamCharacter {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @ManyToOne(type=>Team,
        (team)=>team.teamCharacters)
    team:Team;

    @ManyToOne(type=>Character,
        (character)=>character.teamCharacters)
    character:Character;

}
