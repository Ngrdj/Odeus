import { Character } from "src/character/entities/character.entity";
import { SubClass } from "src/sub-class/entities/sub-class.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('characterSubClass')
export class CharacterSubClass {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    value:number;

    @ManyToOne(type=>SubClass,
        (subClass)=>subClass.characterSubClass,{
            eager:true
        })
    subClass:SubClass;

    @ManyToOne(type=>Character,
        (character)=>character.characterSubClass)
    character:Character;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    
}
