import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {ClassCharacterEntity} from 'src/class/classCharacter.entity';
import {RaceEntity} from 'src/race/race.entity'
import { Behavior } from "./DTOs/behavior.enum";
import { CapacitiesEntity } from "src/capacity/capacities.entity";
import { SkillEntity } from "src/skill/skill.entity";
import { CharacteristicEntity } from "src/characteristic/characteristic.entity";
import { UserEntity } from "src/user/user.entity";
import { CharacterCapacitiesEntity } from "src/CharacterCapacities/characterCapacities.entity";
import { CapacitiesDto } from "src/capacity/capacities-dto";
import { TeamEntity } from "src/team/team.entity";
import { Exclude } from 'class-transformer';

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
    @ManyToMany(type=>ClassCharacterEntity,
        charactclass => charactclass.characters,{
            eager:true,
        })
    characterClass:ClassCharacterEntity[];

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
    @ManyToMany(type=>CharacteristicEntity,
        (characteristic)=>characteristic.characters)
        characteristics:CharacteristicEntity[];

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
