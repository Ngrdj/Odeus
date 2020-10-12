import { Exclude } from "class-transformer";
import { Character } from "src/character/entities/character.entity";
import { Skill } from "src/skill/entities/skill.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('story')
export class Story {

    @Exclude()
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    description:string;

    @Exclude()
    @OneToMany(type=>Character,
        (character)=>character.story)
    characters:Character[];

    @JoinTable()
    @ManyToMany(type=>Skill,
        (skill)=>skill.stories,{
            eager:true,
        })
    skills:Skill[];

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
