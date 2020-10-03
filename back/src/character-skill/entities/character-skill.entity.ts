import { Character } from "src/character/entities/character.entity";
import { Skill } from "src/skill/entities/skill.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity('characterSkill')
export class CharacterSkill {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;
    
    @Column()
    bonus:number;

    @Column()
    isChecked:boolean;

    @ManyToOne(type=>Skill,
        (skill)=>skill.characterSkills)
    skill:Skill;

    @ManyToOne(type=>Character,
        (character)=>character.characterSkills)
    character:Character;
    
}
