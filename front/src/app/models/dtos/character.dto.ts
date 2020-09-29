import { Behavior } from '../enums/behavior.enum';
import { Class } from '../enums/class.enum';
import { Race } from '../enums/race.enum';
import {  CapacitiesGetDto, CapacitiesPostDto } from './capacities.dto';
import { CharacteristicsDto } from './characteristics.dto';
import { ClassDto } from './class.dto';
import { RaceDto } from './race.dto';
import { SkillGetDto, SkillPostDto } from './skill.dto';

export interface CharacterGetDto {

    id:number,
    name:string,
    race:RaceDto,
    class:ClassDto,
    level:number,
    masteryBonus:number,
    characterCapacities:CapacitiesGetDto[],
    skills:SkillGetDto[],
    portrait:string,
    characteristics:CharacteristicsDto[],
    resume:string,
    behavior:Behavior

}

export interface CharacterPostDto {

    id:number,
    name:string,
    race:Race,
    class:Class,
    characterCapacities:CapacitiesPostDto[],
    level:number,
    masteryBonus:number,
    skills:SkillPostDto[],
    portrait:string,
    strenghtValue:number,
    dexterityValue:number,
    intelligenceValue:number,
    charismeValue:number,
    wisdomValue:number,
    constitutionValue:number,
    resume:string,
    behavior:Behavior,
    userId:number

}
