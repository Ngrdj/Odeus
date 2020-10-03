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
    return 'This action adds a new characteristic';
  }

  findAll() {
    return `This action returns all characteristic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} characteristic`;
  }

  update(id: number, updateCharacteristicDto: UpdateCharacteristicDto) {
    return `This action updates a #${id} characteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} characteristic`;
  }
}
