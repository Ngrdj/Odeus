import { Exclude } from "class-transformer";
import { Character } from "src/character/entities/character.entity";
import { SubClass } from "src/sub-class/entities/sub-class.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('character_sub_class')
export class CharacterSubClass {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    value:number;

    @ManyToOne(type=>SubClass,
        (subClass)=>subClass.characterSubClass,{
            eager:true,
            cascade:true
        })
    subClass:SubClass;

    @Exclude()
    @ManyToOne(type=>Character,
        (character)=>character.characterSubClass,{
            cascade:true
        })
    character:Character;

    @Exclude()
    @CreateDateColumn()
    createdAt: Date;

    @Exclude()
    @UpdateDateColumn()
    updatedAt: Date;

    @Exclude()
    @DeleteDateColumn()
    deletedAt: Date;

    
}
