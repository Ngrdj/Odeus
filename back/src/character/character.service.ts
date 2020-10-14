import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { classToPlain } from 'class-transformer';
import { CharacterCharacteristicService } from 'src/character-characteristic/character-characteristic.service';
import { CharacterSkillService } from 'src/character-skill/character-skill.service';
import { CharacterSkill } from 'src/character-skill/entities/character-skill.entity';
import { CharacterSubClassService } from 'src/character-sub-class/character-sub-class.service';
import { CharacteristicService } from 'src/characteristic/characteristic.service';
import { ClassService } from 'src/class/class.service';
import { RaceService } from 'src/race/race.service';
import { SkillService } from 'src/skill/skill.service';
import { StoryService } from 'src/story/story.service';
import { SubClassService } from 'src/sub-class/sub-class.service';
import { TeamService } from 'src/team/team.service';
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
      private subclassService:SubClassService
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
    //Gestion masteryBonus/Level-----------------------------------------------------------------------------------------------------Gestion masteryBonus/Level
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
    character.masteryBonus=masteryBonus;
    
    const newCharacter=await this.characterRepository.create(character);
    newCharacter.characterSubClass=[];


    //Gestion de la class/SubClass-----------------------------------------------------------------------------------------------------Gestion de la class/SubClass

    for (const subClass of createCharacterDto.subClasses) {
      const characterSubClass= await this.characterSubClassService.create(subClass)
     newCharacter.characterSubClass.push(characterSubClass)
    }
    //Gestion Characteristic/Race-----------------------------------------------------------------------------------------------------Gestion Characteristic/Race
    newCharacter.characterCharacteristics=[];
    const characteristics= await this.characteristicService.findAll();
    const race=await this.raceService.findOneByName(createCharacterDto.race);
    newCharacter.race=race;
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

    for (const [i,characteristic] of characterCharacteristics.entries()) {
      const newcharchar=await this.characterCharacteristicService.create({
        value:characteristic+raceBonus[i],
        characteristicId:characteristics[i].id
      })
      newCharacter.characterCharacteristics.push(newcharchar)
    }

    await this.characterRepository.save(newCharacter)
    //Gestion skill/Story-----------------------------------------------------------------------------------------------------Gestion skill/Story
    newCharacter.characterSkills=[];
    const story= await this.storyService.findOneByName(createCharacterDto.story);
    const skills= await this.skillService.findAll();

    const newCharacterCharacteristics= await this.characterCharacteristicService.findAllByCharacter(newCharacter)
    newCharacter.story=story;
    

for (let skill of skills) {

      const characterSkill=new CharacterSkill();
      characterSkill.skill=skill;
      characterSkill.isChecked=false;

      for (let newCharacterCharacteristic of newCharacterCharacteristics) {

  
        if(skill.type===newCharacterCharacteristic.characteristic.name){

          console.log(newCharacterCharacteristic.bonus)
          characterSkill.bonus=newCharacterCharacteristic.bonus

        }
      }
      if(!characterSkill.bonus){
        characterSkill.bonus=0;
        
      }

     for (let skillStory of story.skills) {


       if(skillStory.name===skill.name){
          console.log('\n\n\n\n'+'ok')
          characterSkill.isChecked=true;
          characterSkill.bonus+=masteryBonus;

        }
     }
      
      await this.characterSkillService.create(characterSkill)
      newCharacter.characterSkills.push(characterSkill)
  
}
    //Gestion User/Team-----------------------------------------------------------------------------------------------------Gestion User/Team
    const user= await this.userService.findOneByLogin(login);
    newCharacter.user=user;


    
    


    


    
  
    console.log(newCharacter)
    return await this.characterRepository.save(newCharacter);

  }

  findAll() {
    return this.characterRepository.find();
  }

  async findOne(id: number) {
    const characterFound=await this.characterRepository.findOne(id)
    const character= classToPlain(characterFound);
    const subClassId=[];

    character.characterSubClass.forEach((element) => {

      subClassId.push(element.subClass.id)

    });

    const subClass= await this.subclassService.findAll(subClassId)
    character.capacities=[];

    subClass.forEach((element,i) => {
      const capacities=element.capacities.filter((capacity)=>capacity.level<=character.characterSubClass[i].value);

      capacities.forEach((capacity)=>{

        character.capacities.push(capacity)
        
      })

    });
    console.log(character.capacity)

    return character;

  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
