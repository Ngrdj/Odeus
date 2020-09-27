import { CharacteristicsDto } from 'src/characteristic/characteristics-dto';
import{Class}from 'src/class/DTOs/class.enum'
import{Race}from 'src/race/DTOs/race.enum'
import { SkillDto } from 'src/skill/skill-dto';
import { UserDto } from 'src/user/DTOs/user-dto';
import { Behavior } from './behavior.enum';

export class CharacterDto {
    id:number;
    name:string;
    race:Race;
    class:Class;
    masteryBonus:number;
    skills:SkillDto[];
    portrait:string;
    characteristics:CharacteristicsDto[];
    resume:string;
    behavior:Behavior;
    user:UserDto;


}
