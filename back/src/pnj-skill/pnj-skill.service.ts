import { Injectable } from '@nestjs/common';
import { CreatePnjSkillDto } from './dto/create-pnj-skill.dto';
import { UpdatePnjSkillDto } from './dto/update-pnj-skill.dto';

@Injectable()
export class PnjSkillService {
  create(createPnjSkillDto: CreatePnjSkillDto) {
    return 'This action adds a new pnjSkill';
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
