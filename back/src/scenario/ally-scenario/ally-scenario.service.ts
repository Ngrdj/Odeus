import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAllyScenarioDto } from './dto/create-ally-scenario.dto';
import { UpdateAllyScenarioDto } from './dto/update-ally-scenario.dto';
import { AllyScenario } from './entities/ally-scenario.entity';

@Injectable()
export class AllyScenarioService {
  constructor(@InjectRepository(AllyScenario) private readonly allyRepository:Repository<AllyScenario>){}
  create(createAllyScenarioDto: CreateAllyScenarioDto) {
    return this.allyRepository.create(createAllyScenarioDto);
  }

  async findAll() {
    return await this.allyRepository.find();
  }

  async findOne(id: number) {
    return await this.allyRepository.findOne(id);;
  }

  remove(id: number) {
    return this.allyRepository.softDelete(id);
  }
}
