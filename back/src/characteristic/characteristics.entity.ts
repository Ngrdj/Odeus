import { CharacterEntity } from "src/character/character.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export class CharacteristicsEntity {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    value:number;

    @Column()
    bonus:number;

    @JoinTable()
    @ManyToMany(type=>CharacterEntity,
        (Character)=>Character.characteristics)
    characters:CharacterEntity;
}
