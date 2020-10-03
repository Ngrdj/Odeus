import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { UpdateSubClassDto } from './dto/update-sub-class.dto';
import { SubClass } from './entities/sub-class.entity';

@Injectable()
export class SubClassService {

  constructor(@InjectRepository(SubClass) private readonly subClassRepository:Repository<SubClass>){}
  
  create() {
    return 'This action adds a new subClass';
  }

  findAll() {
    return `This action returns all subClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subClass`;
  }

  async findOneByName(name:string){
    return await this.subClassRepository.findOne({name})
  }

  update(id: number, updateSubClassDto: UpdateSubClassDto) {
    return `This action updates a #${id} subClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} subClass`;
  }
}
