import { Characteristic } from "src/characteristic/entities/characteristic.entity";
import { Story } from "src/story/entities/story.entity";
import { Column, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Skill {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @JoinColumn()
    @ManyToOne(type=>Characteristic,
        (characteristic)=>characteristic.skills)
    characteristic:Characteristic;

    @JoinColumn()
    @ManyToMany(type=>Story,
        (story)=>story.skills)
    stories:Story[];
}
