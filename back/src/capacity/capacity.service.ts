import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { SubClassService } from 'src/sub-class/sub-class.service';
import { Repository } from 'typeorm';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { Capacity } from './entities/capacity.entity';

@Injectable()
export class CapacityService {

  constructor(@InjectRepository(Capacity) private readonly capacityRepository:Repository<Capacity>,private subClassService:SubClassService){}

  async create(createCapacityDto: CreateCapacityDto) {
    const subClassCapacity= await this.subClassService.findOneByName(createCapacityDto.subClass)
    const newCapacity=new Capacity();
    newCapacity.name=createCapacityDto.name;
    newCapacity.level=createCapacityDto.level;
    newCapacity.description=createCapacityDto.description;
    newCapacity.subClass=subClassCapacity;

    return this.capacityRepository.save(newCapacity);
  }

  findAll() {
    return this.capacityRepository.find();
  }

  async findOne(id: number) {
    return await this.capacityRepository.findOne(id);
  }

  update(id: number, updateCapacityDto: UpdateCapacityDto) {
    return this.capacityRepository.update(id,updateCapacityDto);
  }

 async remove(id: number) {
    const capacity=await this.findOne(id);
    return this.capacityRepository.softRemove(capacity);
  }
}
