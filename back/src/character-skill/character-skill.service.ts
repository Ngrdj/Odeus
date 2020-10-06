import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterSkillDto } from './dto/create-character-skill.dto';
import { UpdateCharacterSkillDto } from './dto/update-character-skill.dto';
import { CharacterSkill } from './entities/character-skill.entity';

@Injectable()
export class CharacterSkillService {
  constructor(@InjectRepository(CharacterSkill) private readonly characterSkillRepository:Repository<CharacterSkill>){}

  create(characterSkill: CharacterSkill) {
    return this.characterSkillRepository.save(characterSkill);
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
