import { Character } from "src/character/entities/character.entity";
import { SubClass } from "src/sub-class/entities/sub-class.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('characterSubClass')
export class CharacterSubClass {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    value:number;

    @ManyToOne(type=>SubClass,
        (subClass)=>subClass.characterSubClass)
    subClass:SubClass;

    @ManyToOne(type=>Character,
        (character)=>character.characterSubClass)
    character:Character;

    
}
