import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { Capacity } from './entities/capacity.entity';

@Injectable()
export class CapacityService {

  constructor(@InjectRepository(Capacity) private readonly capacityRepository:Repository<Capacity>){}

  create(createCapacityDto: CreateCapacityDto) {
    return 'This action adds a new capacity';
  }

  findAll() {
    return `This action returns all capacity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} capacity`;
  }

  update(id: number, updateCapacityDto: UpdateCapacityDto) {
    return `This action updates a #${id} capacity`;
  }

  remove(id: number) {
    return `This action removes a #${id} capacity`;
  }
}
