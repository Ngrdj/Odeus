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

  async create(createCharacterSubClassDto: CreateCharacterSubClassDto,character:Character) {
    const subClass= await this.subClassService.findOneByName(createCharacterSubClassDto.name);
    const characterSubClass= new CharacterSubClass();
    characterSubClass.value=createCharacterSubClassDto.value;
    characterSubClass.subClass=subClass;
    characterSubClass.character=character;
    return this.CharacterSubClassRepository.save(characterSubClass);
  }

  findAll() {
    return `This action returns all characterSubClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} characterSubClass`;
  }

  update(id: number, updateCharacterSubClassDto: UpdateCharacterSubClassDto) {
    return `This action updates a #${id} characterSubClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} characterSubClass`;
  }
}
