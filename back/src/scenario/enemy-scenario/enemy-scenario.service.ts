import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnemyScenarioDto } from './dto/create-enemy-scenario.dto';
import { UpdateEnemyScenarioDto } from './dto/update-enemy-scenario.dto';
import { EnemyScenario } from './entities/enemy-scenario.entity';

@Injectable()
export class EnemyScenarioService {
  constructor(@InjectRepository(EnemyScenario) private readonly enemyRepository:Repository<EnemyScenario>){}
  
  create(createEnemyScenarioDto: CreateEnemyScenarioDto) {
    return this.enemyRepository.create(createEnemyScenarioDto);
  }

  async findAll() {
    return await this.enemyRepository.find();
  }

  async findOne(id: number) {
    return await this.enemyRepository.findOne(id);
  }

  update(id: number, updateEnemyScenarioDto: UpdateEnemyScenarioDto) {
    return `This action updates a #${id} enemyScenario`;
  }

  remove(id: number) {
    return this.enemyRepository.softDelete(id);
  }
}
