import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInitScenarioDto } from './dto/create-init-scenario.dto';
import { UpdateInitScenarioDto } from './dto/update-init-scenario.dto';
import { InitScenario } from './entities/init-scenario.entity';

@Injectable()
export class InitScenarioService {
  constructor(@InjectRepository(InitScenario) private readonly initRepository:Repository<InitScenario>){}

  create(createInitScenarioDto: CreateInitScenarioDto) {
    return this.initRepository.create(createInitScenarioDto);
  }

  async findAll() {
    return await this.initRepository.find();
  }

  async findOne(id: number) {
    return await this.initRepository.findOne(id);
  }

  update(id: number, updateInitScenarioDto: UpdateInitScenarioDto) {
    return `This action updates a #${id} initScenario`;
  }

  remove(id: number) {
    return this.initRepository.softDelete(id);
  }
}
