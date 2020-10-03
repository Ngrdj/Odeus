import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';

@Injectable()
export class ClassService {
  constructor(@InjectRepository(Class) private readonly classRepository:Repository<Class>){}
  create(createClassDto: CreateClassDto) {
    return 'This action adds a new class';
  }

  findAll() {
    return `This action returns all class`;
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }
  findOneByName(name:string){
    return this.classRepository.findOne(name)
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
