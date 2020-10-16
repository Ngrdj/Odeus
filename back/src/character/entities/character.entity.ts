
import { CharacterCharacteristic } from "src/character-characteristic/entities/character-characteristic.entity";
import { CharacterSkill } from "src/character-skill/entities/character-skill.entity";
import { CharacterSubClass } from "src/character-sub-class/entities/character-sub-class.entity";
import { ClassEnum } from "src/class/class.enum";
import { SizeEnum } from "src/pnj/size.enum";
import { Race } from "src/race/entities/race.entity";
import { Story } from "src/story/entities/story.entity";
import { Team } from "src/team/entities/team.entity";
import { User } from "src/user/entities/user.entity";
import { Column,CreateDateColumn,DeleteDateColumn,Entity,JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Serializer } from "v8";
import {AlignmentEnum } from "../dto/alignment.enum";
import { GenderEnum } from "../dto/gender.enum";


@Entity('character')
export class Character {
    
    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column({type:"varchar",length:25})
    name:string;

    @JoinColumn()
    @ManyToOne(type=>Race,
        (race)=>race.characters,{
            eager:true
        })
    race:Race;

    @Column()
    className:ClassEnum;

    @Column()
    level:number;

    @Column()
    masteryBonus:number;

    @Column()
    portrait:string;

    @Column()
    resume:string;

    @Column()
    alignment:AlignmentEnum;

    @Column()
    gender:GenderEnum;

    @Column()
    age:number;

    @Column()
    size:SizeEnum;

    @JoinColumn()
    @ManyToOne(type=>User,
        (user)=>user.characters,{
            eager:true
        })
    user:User;

    @JoinColumn()
    @ManyToOne(type=>Story,
        (story)=>story.characters,{
            eager:true
        })
    story:Story;

    @OneToMany(type=>CharacterCharacteristic,
        (characterCharacteristic)=>characterCharacteristic.character,{
            eager:true
        })
    characterCharacteristics:CharacterCharacteristic[];

    @JoinColumn()
    @OneToMany(type=>CharacterSubClass,
        (characterClass)=>characterClass.character,{
            eager:true
        })
    characterSubClass:CharacterSubClass[];

    @JoinColumn()
    @OneToMany(type=>CharacterSkill,
        (characterSkill)=>characterSkill.character,{
            eager:true
        })
    characterSkills:CharacterSkill[];

    @ManyToMany(type=>Team,
        (team)=>team.characters)
    teams:Team[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
