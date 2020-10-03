import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterSubClassDto } from './dto/create-character-sub-class.dto';
import { UpdateCharacterSubClassDto } from './dto/update-character-sub-class.dto';
import { CharacterSubClass } from './entities/character-sub-class.entity';

@Injectable()
export class CharacterSubClassService {
  constructor(@InjectRepository(CharacterSubClass) private readonly CharacterSubClassRepository:Repository<CharacterSubClass>){}

  create(createCharacterSubClassDto: CreateCharacterSubClassDto) {
    return 'This action adds a new characterSubClass';
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
