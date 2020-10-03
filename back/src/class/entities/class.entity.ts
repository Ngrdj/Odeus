import { CharacterClass } from "src/character-class/entities/character-class.entity";
import { SubClass } from "src/sub-class/entities/sub-class.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('class')
export class Class {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @JoinColumn()
    @OneToMany(type=>SubClass,
        (subClass)=>subClass.class)
    subClass:SubClass[];

    @JoinColumn()
    @OneToMany(type=>CharacterClass,
        (characterClass)=>characterClass.class)
    characterClass:CharacterClass[];
}
