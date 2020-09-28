import { CapacitiesDto } from 'src/capacity/capacities-dto';
import { CharacteristicsDto } from 'src/characteristic/characteristics-dto';
import{Class}from 'src/class/DTOs/class.enum'
import{Race}from 'src/race/DTOs/race.enum'
import { SkillDto } from 'src/skill/skill-dto';
import { UserDto } from 'src/user/DTOs/user-dto';
import { Behavior } from './behavior.enum';
import{IsNotEmpty, IsString, IsNumber} from 'class-validator'

export class CharacterDto {
    id:number;

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    race:Race;

    @IsString()
    @IsNotEmpty()
    class:Class;

    @IsNotEmpty()
    characterCapacities:CapacitiesDto[];

    @IsNumber()
    @IsNotEmpty()
    level:number;

    @IsNotEmpty()
    masteryBonus:number;

    @IsNotEmpty()
    skills:SkillDto[];

    @IsString()
    portrait:string;

    @IsNumber()
    @IsNotEmpty()
    strenghtValue:number;

    @IsNumber()
    @IsNotEmpty()
    dexterityValue:number;

    @IsNumber()
    @IsNotEmpty()
    intelligenceValue:number;

    @IsNumber()
    @IsNotEmpty()
    charismeValue:number;

    @IsNumber()
    @IsNotEmpty()
    wisdomValue:number;

    @IsNumber()
    @IsNotEmpty()
    constitutionValue:number;

    @IsString()
    resume:string;

    @IsString()
    @IsNotEmpty()
    behavior:Behavior;

    @IsNumber()
    @IsNotEmpty()
    userId:number;


}
