import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {ClassEntity} from 'src/class/classCharacter.entity';
import {RaceEntity} from 'src/race/race.entity'
import { Behavior } from "./DTOs/behavior.enum";
import { CapacitiesEntity } from "src/capacity/capacities.entity";
import { SkillEntity } from "src/skill/skill.entity";
import { CharacteristicsEntity } from "src/characteristic/characteristic.entity";
import { UserEntity } from "src/user/user.entity";
import { CharacterCapacitiesEntity } from "src/CharacterCapacities/characterCapacities.entity";
import { CapacitiesDto } from "src/capacity/capacities-dto";
import { TeamEntity } from "src/team/team.entity";

@Entity('character')
export class CharacterEntity {

    @PrimaryGeneratedColumn({type:"int"})
    id:number;

    @Column({type:"varchar",length:25})
    name:string;

    @JoinColumn()
    @ManyToOne(type=>RaceEntity,
        (race)=>race.characters)
    race:RaceEntity;

    @JoinTable()
    @ManyToMany(type=>ClassEntity,
        charactclass => charactclass.characters,{
            eager:true,
        })
    characterClass:ClassEntity[];

    @Column()
    level:number;

    @Column()
    masteryBonus:number;

    @OneToMany(type=>CharacterCapacitiesEntity,
        (characterCapacity)=>characterCapacity.character)
    characterCapacity:CharacterCapacitiesEntity[];

    @JoinTable()
    @ManyToMany(type=>SkillEntity,
        (skill)=>skill.characters)
    skill:SkillEntity[];

    @Column()
    portrait:string;

    @JoinTable()
    @ManyToMany(type=>CharacteristicsEntity,
        (characteristic)=>characteristic.characters)
        characteristics:CharacteristicsEntity[];

    @Column()
    resume:string;

    @Column()
    behavior:Behavior;

    @JoinColumn()
    @ManyToOne(type=>UserEntity,
        (user)=>user.characters)
    user:UserEntity[]

    @JoinTable()
    @ManyToMany(type=>TeamEntity,
        (team)=>team.characters)
    teams:TeamEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
    
}
