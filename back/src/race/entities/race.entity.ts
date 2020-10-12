import { Exclude } from "class-transformer";
import { Character } from "src/character/entities/character.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('race')
export class Race {
   
    @Exclude()
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

    @Exclude()
    @OneToMany(type=>Character,
        (character)=>character.race)
    characters:Character[];

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
