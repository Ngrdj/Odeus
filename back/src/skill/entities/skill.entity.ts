import { Exclude } from "class-transformer";
import { CharacterSkill } from "src/character-skill/entities/character-skill.entity";
import { CharacteristicEnum } from "src/characteristic/characteristic.enum";
import { Characteristic } from "src/characteristic/entities/characteristic.entity";
import { Story } from "src/story/entities/story.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity('skill')
export class Skill {

    @Exclude()
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column()
    name:string;

    @Column()
    type:CharacteristicEnum;

    @ManyToMany(type=>Story,
        (story)=>story.skills)
    stories:Story[];

    @JoinColumn()
    @OneToMany(type=>CharacterSkill,
        (characterSkill)=>characterSkill.skill)
    characterSkills:CharacterSkill[];

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
