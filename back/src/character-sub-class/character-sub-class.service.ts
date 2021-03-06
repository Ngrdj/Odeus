import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from 'src/character/entities/character.entity';
import { SubClassService } from 'src/sub-class/sub-class.service';
import { Repository } from 'typeorm';
import { CreateCharacterSubClassDto } from './dto/create-character-sub-class.dto';
import { UpdateCharacterSubClassDto } from './dto/update-character-sub-class.dto';
import { CharacterSubClass } from './entities/character-sub-class.entity';

@Injectable()
export class CharacterSubClassService {

  constructor(@InjectRepository(CharacterSubClass)
   private readonly CharacterSubClassRepository:Repository<CharacterSubClass>,
   private subClassService:SubClassService
   ){}

  async create(createCharacterSubClassDto: CreateCharacterSubClassDto) {
    const subClass= await this.subClassService.findOneByName(createCharacterSubClassDto.name);
    const characterSubClass= new CharacterSubClass();
    characterSubClass.value=createCharacterSubClassDto.value;
    characterSubClass.subClass=subClass;
    return await this.CharacterSubClassRepository.save(characterSubClass);
  }

  async findAll() {
    return await this.CharacterSubClassRepository.find();
  }

  async findOne(id: number) {
    return await this.CharacterSubClassRepository.findOne(id);
  }

  update(id: number, updateCharacterSubClassDto: UpdateCharacterSubClassDto) {
    return `This action updates a #${id} characterSubClass`;
  }

  async remove(id: number) {
    const characterSubClass=await this.findOne(id);
    return this.CharacterSubClassRepository.softRemove(characterSubClass);
  }

  async delete(id:number){
    const capacity=await this.findOne(id);
    return this.CharacterSubClassRepository.delete(capacity);
  }
}
