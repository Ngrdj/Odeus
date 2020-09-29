import { CapacitiesEntity } from "src/capacity/capacities.entity";
import { CharacterEntity } from "src/character/character.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('class')
export class ClassEntity {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    label:string;

    @JoinTable()
    @ManyToMany(type=>CharacterEntity,
        (charact)=>charact.characterClass)
    characters:CharacterEntity[];



    @JoinColumn()
    @OneToMany(type=>CapacitiesEntity,
        (capacity)=>capacity.class)
    capacity:CapacitiesEntity[];

}
