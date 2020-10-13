import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePnjSkillDto } from './dto/create-pnj-skill.dto';
import { UpdatePnjSkillDto } from './dto/update-pnj-skill.dto';
import { PnjSkill } from './entities/pnj-skill.entity';

@Injectable()
export class PnjSkillService {
  constructor(
    @InjectRepository(PnjSkill) private readonly pnjSkillRepository:Repository<PnjSkill>
  ){}
  create(pnjSkill: PnjSkill) {
    return this.pnjSkillRepository.save(pnjSkill);
  }

  findAll() {
    return `This action returns all pnjSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pnjSkill`;
  }

  update(id: number, updatePnjSkillDto: UpdatePnjSkillDto) {
    return `This action updates a #${id} pnjSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} pnjSkill`;
  }
}
