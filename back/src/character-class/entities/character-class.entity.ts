import { CharacterSubClass } from "src/character-sub-class/entities/character-sub-class.entity";
import { Character } from "src/character/entities/character.entity";
import { Class } from "src/class/entities/class.entity";
import { Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('characterClass')
export class CharacterClass {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @JoinColumn()
    @OneToMany(type=>CharacterSubClass,
        (characterSubClass)=>characterSubClass.characterClass)
    characterSubClass:CharacterSubClass[];

    @ManyToOne(type=>Class,
        (classChar)=>classChar.characterClass)
    class:Class;
    
    @ManyToOne(type=>Character,
        (character)=>character.characterClass)
    character:Character;
}
