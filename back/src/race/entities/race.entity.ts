import { Character } from "src/character/entities/character.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
}
