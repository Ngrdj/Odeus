import { Injectable } from '@nestjs/common';
import { CreateCharacterClassDto } from './dto/create-character-class.dto';
import { UpdateCharacterClassDto } from './dto/update-character-class.dto';

@Injectable()
export class CharacterClassService {
  create(createCharacterClassDto: CreateCharacterClassDto) {
    return 'This action adds a new characterClass';
  }

  findAll() {
    return `This action returns all characterClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} characterClass`;
  }

  update(id: number, updateCharacterClassDto: UpdateCharacterClassDto) {
    return `This action updates a #${id} characterClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} characterClass`;
  }
}
