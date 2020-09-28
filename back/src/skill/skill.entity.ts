import { CharacterEntity } from "src/character/character.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('skill')
export class SkillEntity {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    value:string;

    @Column()
    isChecked:boolean;

    @Column()
    type:String;

    @JoinTable()
    @ManyToMany(type=>CharacterEntity,
        (character)=>character.skill)
    characters:CharacterEntity[];
}
