import { Injectable } from '@nestjs/common';
import { CreateCharacterSkillDto } from './dto/create-character-skill.dto';
import { UpdateCharacterSkillDto } from './dto/update-character-skill.dto';

@Injectable()
export class CharacterSkillService {
  create(createCharacterSkillDto: CreateCharacterSkillDto) {
    return 'This action adds a new characterSkill';
  }

  findAll() {
    return `This action returns all characterSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} characterSkill`;
  }

  update(id: number, updateCharacterSkillDto: UpdateCharacterSkillDto) {
    return `This action updates a #${id} characterSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} characterSkill`;
  }
}
