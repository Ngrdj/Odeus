import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassEnum } from './class.enum';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';

@Injectable()
export class ClassService {
  constructor(@InjectRepository(Class) private readonly classRepository:Repository<Class>){}
  
  async create(createClassDto: CreateClassDto) {
    const newClass= new Class();
    newClass.name=createClassDto.name;
    return await this.classRepository.save(newClass) ;
  }

  async findAll() {
    return await this.classRepository.find();
  }

  async findOne(id: number) {
    return await this.classRepository.findOne(id);
  }
  async findOneByName(name:ClassEnum){
    return await this.classRepository.findOne({name:name})
  }

  async update(id: number, updateClassDto: UpdateClassDto) {
    const classchar= await this.findOne(id)
    classchar.name=updateClassDto.name;
    return await this.classRepository.save(classchar);
  }

  async remove(id: number) {
    const classchar = await this.findOne(id)
    return this.classRepository.softRemove(classchar);
  }
}
