import { Character } from "src/character/entities/character.entity";
import { Team } from "src/team/entities/team.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoleEnum } from "../role.enum";
@Entity('user')
export class User {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    login:string;

    @Column()
    password:string;

    @Column()
    salt:string;

    @Column()
    role:RoleEnum;

    @Column()
    email:string;

    @OneToMany(type=>Character,
        (character)=>character.user)
    characters:Character[];

    @OneToMany(type=>Team,
        (team)=>team.user)
    team:Team[];

}
