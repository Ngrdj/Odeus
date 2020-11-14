import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTwistScenarioDto } from './dto/create-twist-scenario.dto';
import { UpdateTwistScenarioDto } from './dto/update-twist-scenario.dto';
import { TwistScenario } from './entities/twist-scenario.entity';

@Injectable()
export class TwistScenarioService {

  constructor(@InjectRepository(TwistScenario) private readonly twistRepository:Repository<TwistScenario>){}

  create(createTwistScenarioDto: CreateTwistScenarioDto) {

    return this.twistRepository.create(createTwistScenarioDto);
  }

  async findAll() {
    return await this.twistRepository.find();
  }

  async findOne(id: number) {
    return await this.twistRepository.findOne(id);
  }

  update(id: number, updateTwistScenarioDto: UpdateTwistScenarioDto) {
    return `This action updates a #${id} twistScenario`;
  }

  remove(id: number) {
    return this.twistRepository.softDelete(id);
  }
}
