import { Character } from "src/character/entities/character.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('race')
export class Race {
   
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    strBonus:number;

    @Column()
    dexBonus:number;

    @Column()
    intBonus:number;

    @Column()
    constBonus:number;

    @Column()
    wisBonus:number;

    @Column()
    chaBonus:number;

    @OneToMany(type=>Character,
        (character)=>character.race)
    characters:Character[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
