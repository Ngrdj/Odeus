import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacterCharacteristicService } from 'src/character-characteristic/character-characteristic.service';
import { CharacterSubClassService } from 'src/character-sub-class/character-sub-class.service';
import { CharacteristicService } from 'src/characteristic/characteristic.service';
import { ClassService } from 'src/class/class.service';
import { SubClassService } from 'src/sub-class/sub-class.service';
import { Repository } from 'typeorm';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class CharacterService {
  constructor(
      @InjectRepository(Character)
      private readonly characterRepository:Repository<Character>,
      private classService:ClassService,
      private characterCharacteristicService:CharacterCharacteristicService,
      private characteristicService:CharacteristicService,
      private characterSubClassService:CharacterSubClassService,
    ){}
  async create(createCharacterDto: CreateCharacterDto) {
    const character= new Character();
    const classEntity= await this.classService.findOneByName(createCharacterDto.class)
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
    /*Gestion Characteristic*/
    const characteristics= await this.characteristicService.findAll()
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
        value:characteristic,
        characteristicId:characteristics[i].id
      },newCharacter)
    })

    /*Gestion Skill*/

    


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
