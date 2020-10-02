import { Injectable } from '@nestjs/common';
import { CreateCharacterSubClassDto } from './dto/create-character-sub-class.dto';
import { UpdateCharacterSubClassDto } from './dto/update-character-sub-class.dto';

@Injectable()
export class CharacterSubClassService {
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
