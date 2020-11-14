import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContextScenarioDto } from './dto/create-context-scenario.dto';
import { UpdateContextScenarioDto } from './dto/update-context-scenario.dto';
import { ContextScenario } from './entities/context-scenario.entity';

@Injectable()
export class ContextScenarioService {
  constructor(@InjectRepository(ContextScenario) private readonly contextRepository:Repository<ContextScenario>){}

  create(createContextScenarioDto: CreateContextScenarioDto) {
    return this.contextRepository.create(createContextScenarioDto);
  }

  async findAll() {
    return await this.contextRepository.find();
  }

  async findOne(id: number) {
    return await this.contextRepository.findOne(id);
  }

  update(id: number, updateContextScenarioDto: UpdateContextScenarioDto) {
    return `This action updates a #${id} contextScenario`;
  }

  remove(id: number) {
    return this.contextRepository.softDelete(id);
  }
}
