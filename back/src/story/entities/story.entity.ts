import { Character } from "src/character/entities/character.entity";
import { Skill } from "src/skill/entities/skill.entity";
import { Column, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Story {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @ManyToOne(type=>Character,
        (character)=>character.story)
    characters:Character[];

    @JoinTable()
    @ManyToMany(type=>Skill,
        (skill)=>skill.stories)
    skills:Skill[];
    
}
