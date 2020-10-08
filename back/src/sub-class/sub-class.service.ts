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

  async findAll() {
    return await this.subClassRepository.find();
  }

  async findOne(id: number) {
    return await this.subClassRepository.findOne(id);
  }

  async findOneByName(name:string){
    return await this.subClassRepository.findOne({name:name})
  }

  async update(id: number, updateSubClassDto: UpdateSubClassDto) {
    const subClass= await this.findOne(id);
    const className= await this.classService.findOneByName(updateSubClassDto.class)
    subClass.name=updateSubClassDto.name;
    subClass.class=className;
    return this.subClassRepository.save(subClass);
  }

  async remove(id: number) {
    const subClass= await this.findOne(id)
    return this.subClassRepository.softRemove(subClass);
  }

  async delete(id:number){
    const subClass=await this.findOne(id);
    return this.subClassRepository.delete(subClass);
  }
}
