import { CapacitiesEntity } from "src/capacity/capacities.entity";
import { CharacterEntity } from "src/character/character.entity";
import { Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column } from "typeorm";

@Entity('characterCapacities')
export class CharacterCapacitiesEntity {
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    label:string;

    @Column()
    Value:number;

    
    @ManyToOne(type=>CharacterEntity,
        (character)=>character.characterCapacity)
    character:CharacterEntity;


    @JoinColumn()
    @ManyToOne(type=>CapacitiesEntity,
        (capacity)=>capacity.characterCapacity)
    capacities:CapacitiesEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
