import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';
import { Characteristic } from './entities/characteristic.entity';

@Injectable()
export class CharacteristicService {
  constructor(@InjectRepository(Characteristic) private readonly characteristicRepository:Repository<Characteristic>){}

  create(createCharacteristicDto: CreateCharacteristicDto) {
    const characteristic= new Characteristic();
    characteristic.name=createCharacteristicDto.name;
    return this.characteristicRepository.save(characteristic);
  }

  async findAll() {
    return await this.characteristicRepository.find();
  }

  async findOne(id: number) {
    return await this.characteristicRepository.findOne(id);
  }

  async findOneByName(name:string){
    return await this.characteristicRepository.findOne({name}) 
  }

  async update(id: number, updateCharacteristicDto: UpdateCharacteristicDto) {
    const characteristic= await this.findOne(id);
    characteristic.name=updateCharacteristicDto.name;
    return this.characteristicRepository.save(characteristic);
  }

  async remove(id: number) {
    const characteristic= await this.findOne(id);
    return this.characteristicRepository.softDelete(characteristic);
  }
  async delete (id:number){
    return this.characteristicRepository.delete(id)
  }
}
