import { Capacity } from "src/capacity/entities/capacity.entity";
import { CharacterSubClass } from "src/character-sub-class/entities/character-sub-class.entity";
import { Class } from "src/class/entities/class.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('subClass')
export class SubClass {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @JoinColumn()
    @OneToMany(type=>Capacity,
        (capacity)=>capacity.subClass)
    capacities:Capacity[];

    @ManyToOne(type=>Class,
        (classcha)=>classcha.subClass)
    class:Class;

    @JoinColumn()
    @OneToMany(type=>CharacterSubClass,
        (characterSubClass)=>characterSubClass.subClass)
    characterSubClass:CharacterSubClass[];
    
}