import { CharacterClass } from "src/character-class/entities/character-class.entity";
import { SubClass } from "src/sub-class/entities/sub-class.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class CharacterSubClass {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    value:number;

    @ManyToOne(type=>SubClass,
        (subClass)=>subClass.characterSubClass)
    subClass:SubClass[];

    @ManyToOne(type=>CharacterClass,
        (characterClass)=>characterClass.characterSubClass)
    characterClass:CharacterClass[];

    
}
