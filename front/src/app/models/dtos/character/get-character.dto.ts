import { AlignmentEnum } from '../../enums/alignment.enum';
import { ClassEnum } from '../../enums/class.enum';
import { GenderEnum } from '../../enums/gender.enum';
import { GetRaceDto } from '../race/get-race.dto';
import { GetStoryDto } from '../story/get-story.dto';
import { GetTeamDto } from '../team/get-team.dto';
import { GetUserDto } from '../user/get-user.dto';
import { GetCharacterCharacteristicDto } from './characterCharacteristic/get-character-characteristic.dto';
import { GetCharacterSkillDto } from './characterSkill/get-character-skill.dto';
import { GetCharacterSubClassDto } from './characterSubClass/get-character-sub-class.dto';

export interface GetCharacterDto {

    id:number;
    name:string;
    className:ClassEnum;
    race:GetRaceDto;
    level:number;
    masteryBonus:number;
    portrait:string;
    resume:string;
    alignment:AlignmentEnum;
    gender:GenderEnum;
    age:number;
    user:GetUserDto;
    story:GetStoryDto;
    characterCharacteristics:GetCharacterCharacteristicDto[];
    characterSubClass:GetCharacterSubClassDto[];
    characterSkills:GetCharacterSkillDto[];
    teams:GetTeamDto[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
