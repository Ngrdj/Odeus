import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBonusScenarioDto } from './dto/create-bonus-scenario.dto';
import { UpdateBonusScenarioDto } from './dto/update-bonus-scenario.dto';
import { BonusScenario } from './entities/bonus-scenario.entity';

@Injectable()
export class BonusScenarioService {
  constructor(@InjectRepository(BonusScenario) private readonly bonusRepository:Repository<BonusScenario>){}
  create(createBonusScenarioDto: CreateBonusScenarioDto) {
    return this.bonusRepository.create(createBonusScenarioDto);
  }

  async findAll() {
    return await this.bonusRepository.find();
  }

  async findOne(id: number) {
    return await this.bonusRepository.findOne(id);
  }

  update(id: number, updateBonusScenarioDto: UpdateBonusScenarioDto) {
    return `This action updates a #${id} bonusScenario`;
  }

  remove(id: number) {
    return this.bonusRepository.softDelete(id);
  }
}
