import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { ClassService } from 'src/class/class.service';
import { Repository } from 'typeorm';
import { CreateSubClassDto } from './dto/create-sub-class.dto';
import { UpdateSubClassDto } from './dto/update-sub-class.dto';
import { SubClass } from './entities/sub-class.entity';

@Injectable()
export class SubClassService {

  constructor(@InjectRepository(SubClass) private readonly subClassRepository:Repository<SubClass>,private classService:ClassService){}
  
async create(createSubClassDto:CreateSubClassDto) {
    const className= await this.classService.findOneByName(createSubClassDto.class)
    const newSubClass=new SubClass();
    newSubClass.name=createSubClassDto.name;
    newSubClass.class=className;
    

    return this.subClassRepository.save(newSubClass);
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
