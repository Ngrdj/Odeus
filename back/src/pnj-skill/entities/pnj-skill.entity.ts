import { Exclude } from "class-transformer";
import { Pnj } from "src/pnj/entities/pnj.entity";
import { Skill } from "src/skill/entities/skill.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('pnj_skill')
export class PnjSkill {
    
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    bonus:number;

    @Column()
    isChecked:boolean;

    @ManyToOne(type=>Skill,
        (skill)=>skill.pnjSkills,{
            eager:true
        })
    skill:Skill;

    
    @ManyToOne(type=>Pnj,
        (pnj)=>pnj.pnjSkills)
    pnj:Pnj;


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
