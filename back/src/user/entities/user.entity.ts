import { Character } from "src/character/entities/character.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class User {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    login:string;

    @Column()
    password:string;

    @OneToMany(type=>Character,
        (character)=>character.user)
    characters:Character[];

}
