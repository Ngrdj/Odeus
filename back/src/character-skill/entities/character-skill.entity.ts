import { Exclude } from "class-transformer";
import { Character } from "src/character/entities/character.entity";
import { Skill } from "src/skill/entities/skill.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('character_skill')
export class CharacterSkill {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;
    
    @Column()
    bonus:number;

    @Column()
    isChecked:boolean;


    @ManyToOne(type=>Skill,
        (skill)=>skill.characterSkills,{
            eager:true
        })
    skill:Skill;

    @Exclude()
    @ManyToOne(type=>Character,
        (character)=>character.characterSkills)
    character:Character;
    
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
