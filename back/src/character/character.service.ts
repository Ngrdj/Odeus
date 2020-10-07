import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacterCharacteristicService } from 'src/character-characteristic/character-characteristic.service';
import { CharacterSkillService } from 'src/character-skill/character-skill.service';
import { CharacterSkill } from 'src/character-skill/entities/character-skill.entity';
import { CharacterSubClassService } from 'src/character-sub-class/character-sub-class.service';
import { CharacteristicService } from 'src/characteristic/characteristic.service';
import { ClassService } from 'src/class/class.service';
import { RaceService } from 'src/race/race.service';
import { SkillService } from 'src/skill/skill.service';
import { StoryService } from 'src/story/story.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class CharacterService {
  constructor(
      @InjectRepository(Character)
      private readonly characterRepository:Repository<Character>,
      private characterCharacteristicService:CharacterCharacteristicService,
      private characteristicService:CharacteristicService,
      private characterSubClassService:CharacterSubClassService,
      private storyService:StoryService,
      private skillService:SkillService,
      private characterSkillService:CharacterSkillService,
      private raceService:RaceService,
      private userService:UserService,
    ){}
  async create(createCharacterDto: CreateCharacterDto, login) {
    const character= new Character();
    character.name=createCharacterDto.name;
    character.level=createCharacterDto.level;
    character.portrait=createCharacterDto.portrait;
    character.resume=createCharacterDto.resume;
    character.alignment=createCharacterDto.alignment;
    character.gender=createCharacterDto.gender;
    character.age=createCharacterDto.age;
    const newCharacter=await this.characterRepository.save(character);
    /*Gestion de la class/SubClass*/
    createCharacterDto.subClasses.forEach((subClass)=>{
      this.characterSubClassService.create(subClass,newCharacter)
    })
    /*Gestion Characteristic/Race*/
    const characteristics= await this.characteristicService.findAll();
    const race=await this.raceService.findOneByName(createCharacterDto.race);
    const raceBonus=[
      race.strBonus,
      race.dexBonus,
      race.constBonus,
      race.intBonus,
      race.wisBonus,
      race.chaBonus
    ]
    const characterCharacteristics=[
      createCharacterDto.strength,
      createCharacterDto.dexterity,
      createCharacterDto.constitution, 
      createCharacterDto.intelligence,
      createCharacterDto.wisdom,
      createCharacterDto.charisma
    ];
    characterCharacteristics.forEach((characteristic,i)=>{
      this.characterCharacteristicService.create({
        value:characteristic+raceBonus[i],
        characteristicId:characteristics[i].id
      },newCharacter)
    })

    /*Gestion masteryBonus/Level*/
    let masteryBonus=2;
    const level=createCharacterDto.level;
    
    if(level<5){
      masteryBonus=2;
    }else if(level>4&&level<9){
      masteryBonus=3;
    }else if(level>8&&level<13){
      masteryBonus=4;
    }else if(level>12&&level<17){
      masteryBonus=5;
    }else if(level>16){
      masteryBonus=6;
    }
    
    /*Gestion skill/Story*/
    const story= await this.storyService.findOneByName(createCharacterDto.story);
    const skills= await this.skillService.findAll();
    const newCharacterCharacteristics= await this.characterCharacteristicService.findAllByCharacter(newCharacter)
    skills.forEach((skill)=>{
      const characterSkill=new CharacterSkill();
      newCharacterCharacteristics.forEach((newCharacterCharacteristic)=>{
        if(skill.type===newCharacterCharacteristic.characteristic.name){
          characterSkill.bonus=newCharacterCharacteristic.bonus
        }
      })
      story.skills.forEach((skillStory)=>{
        if(skillStory.name===skill.name){
          characterSkill.isChecked=true;
          characterSkill.bonus+=masteryBonus;
        }else{
          characterSkill.isChecked=false;
        }
      })
      this.characterSkillService.create(characterSkill)
    })
    /*Gestion User/Team*/ 
    const user= await this.userService.findOneByLogin(login);
    newCharacter.user=user;
    


    


    


    return newCharacter;
  }

  findAll() {
    return this.characterRepository.find();
  }

  async findOne(id: number) {
    return await this.characterRepository.findOne(id);
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
