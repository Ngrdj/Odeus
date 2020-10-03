import { TeamCharacter } from "src/team-character/entities/team-character.entity";
import { User } from "src/user/entities/user.entity";
import { Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Team {
    
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string

    @JoinColumn()
    @OneToMany(type=>TeamCharacter,
        (teamCharacter)=>teamCharacter.team)
    teamCharacters:TeamCharacter[];

    @ManyToOne(type=>User,
        (user)=>user.team)
    user:User;

}
