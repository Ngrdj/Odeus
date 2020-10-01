import { CharacterEntity } from "src/character/character.entity";
import { CharacterCapacitiesEntity } from "src/CharacterCapacities/characterCapacities.entity";
import { ClassCharacterEntity } from "src/class/classCharacter.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('capacity')
export class CapacitiesEntity {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

   
    @ManyToOne(type=>ClassCharacterEntity,
        (charactclass)=>charactclass.capacity)
    class:ClassCharacterEntity;

    @Column()
    type:string;

    @Column()
    level:number;

    @OneToMany(type=>CharacterCapacitiesEntity,
        (characterCapacity)=>characterCapacity.capacities)
    characterCapacity:CharacterCapacitiesEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
