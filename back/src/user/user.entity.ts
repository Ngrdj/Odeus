import { CharacterEntity } from "src/character/character.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export class UserEntity {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    status:string;

    @Column()
    login:string;

    @Column()
    MDP:string;

    @JoinColumn()
    @OneToMany(type=>CharacterEntity,
        (character)=>character.user)
    characters:CharacterEntity;

}
