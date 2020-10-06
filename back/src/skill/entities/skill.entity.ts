import { CharacterSkill } from "src/character-skill/entities/character-skill.entity";
import { CharacteristicEnum } from "src/characteristic/characteristic.enum";
import { Characteristic } from "src/characteristic/entities/characteristic.entity";
import { Story } from "src/story/entities/story.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity('skill')
export class Skill {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    type:CharacteristicEnum;

    @JoinColumn()
    @ManyToMany(type=>Story,
        (story)=>story.skills)
    stories:Story[];

    @JoinColumn()
    @OneToMany(type=>CharacterSkill,
        (characterSkill)=>characterSkill.skill)
    characterSkills:CharacterSkill[];
}
