import { CharacterEntity } from "src/character/character.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Exclude} from 'class-transformer';
@Entity('race')
export class RaceEntity {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    label:string;

    @OneToMany(type=>CharacterEntity,
        (charact)=>charact.race)
    characters:CharacterEntity[];

    @Column({
        nullable:true,
    })
    strBonus:number;

    @Column({
        nullable:true,
    })
    dexBonus:number;

    @Column({
        nullable:true,
    })
    constBonus:number;

    @Column({
        nullable:true,
    })
    intBonus:number;

    @Column({
        nullable:true,
    })
    charBonus:number;

    @Column({
        nullable:true,
    })
    wisBonus:number;

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

