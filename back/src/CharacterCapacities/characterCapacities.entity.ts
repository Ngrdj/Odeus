import { CapacitiesEntity } from "src/capacity/capacities.entity";
import { CharacterEntity } from "src/character/character.entity";
import { Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity('characterCapacities')
export class CharacterCapacitiesEntity {
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    
    @ManyToOne(type=>CharacterEntity,
        (character)=>character.characterCapacity)
    character:CharacterEntity;


    @JoinColumn()
    @ManyToOne(type=>CapacitiesEntity,
        (capacity)=>capacity.characterCapacity)
    capacities:CapacitiesEntity;
}
