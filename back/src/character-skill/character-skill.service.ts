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

  async findAll() {
    return await this.characterSkillRepository.find();
  }

  async findOne(id: number) {
    return await this.characterSkillRepository.findOne(id);
  }

  update(id: number, updateCharacterSkillDto: UpdateCharacterSkillDto) {
    return `This action updates a #${id} characterSkill`;
  }

  async remove(id: number) {
    const characterSkill=await this.findOne(id);
    return this.characterSkillRepository.softRemove(characterSkill);
  }

  async delete(id:number){
    const characterSkill=await this.findOne(id);
    return this.characterSkillRepository.delete(characterSkill);
  }
}
