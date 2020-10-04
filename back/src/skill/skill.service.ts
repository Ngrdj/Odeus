import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacteristicService } from 'src/characteristic/characteristic.service';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(@InjectRepository(Skill) private readonly skillRepository:Repository<Skill>, private characteristicService:CharacteristicService){}

  async create(createSkillDto: CreateSkillDto) {
    const characteristic= await this.characteristicService.findOneByName(createSkillDto.type)
    const newSkill= new Skill();
    newSkill.name=createSkillDto.name;
    newSkill.characteristic=characteristic;
    return this.skillRepository.save(newSkill);
  }

  async findAll() {
    return await this.skillRepository.find();
  }

  async findOne(id: number) {
    return await this.skillRepository.findOne(id);
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  async remove(id: number) {
    const skill= await this.findOne(id)
    return this.skillRepository.softRemove(skill);
  }
}
