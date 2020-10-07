import { Character } from "src/character/entities/character.entity";
import { Skill } from "src/skill/entities/skill.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('story')
export class Story {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @OneToMany(type=>Character,
        (character)=>character.story)
    characters:Character[];

    @JoinTable()
    @ManyToMany(type=>Skill,
        (skill)=>skill.stories,{
            eager:true
        })
    skills:Skill[];
    
}
