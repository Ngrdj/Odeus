import { CapacitiesDto } from 'src/capacity/capacities-dto';
import { CharacteristicDto } from 'src/characteristic/characteristic-dto';
import{Class}from 'src/class/DTOs/class.enum'
import{Race}from 'src/race/DTOs/race.enum'
import { SkillDto } from 'src/skill/skill-dto';
import { UserDto } from 'src/user/DTOs/user-dto';
import { Behavior } from './behavior.enum';
import{IsNotEmpty, IsString, IsNumber} from 'class-validator'
import { CharacterCapacitiesDto } from 'src/CharacterCapacities/DTOs/charactercapacities-dto';


export class CharacterDto {

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
    characterCapacities:CharacterCapacitiesDto[];

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

export interface CharacterGet{

    id:number;
    name:string;
    race:Race;
    class:Class;
    characterCapacities:CapacitiesDto[];
    level:number;
    masteryBonus:number;
    skills:SkillDto[];
    portrait:string;
    strenghtValue:number;
    dexterityValue:number;
    intelligenceValue:number;
    charismeValue:number;
    wisdomValue:number;
    constitutionValue:number;
    resume:string;
    behavior:Behavior;
    userId:number;
    
}
