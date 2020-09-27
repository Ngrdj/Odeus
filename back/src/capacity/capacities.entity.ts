import { CharacterEntity } from "src/character/character.entity";
import { ClassEntity } from "src/class/class.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export class CapacitiesEntity {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @JoinColumn()
    @ManyToOne(type=>ClassEntity,
        (charactclass)=>charactclass.characters)
    class:ClassEntity;

    @Column()
    type:string;

    @Column()
    level:number;

    @JoinTable()
    @OneToMany(type=>CharacterEntity,
        (capacity)=>capacity.capacities)
    characters:CharacterEntity[];



}
