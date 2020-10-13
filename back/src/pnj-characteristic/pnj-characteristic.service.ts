import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacteristicService } from 'src/characteristic/characteristic.service';
import { Pnj } from 'src/pnj/entities/pnj.entity';
import { Repository } from 'typeorm';
import { CreatePnjCharacteristicDto } from './dto/create-pnj-characteristic.dto';
import { UpdatePnjCharacteristicDto } from './dto/update-pnj-characteristic.dto';
import { PnjCharacteristic } from './entities/pnj-characteristic.entity';

@Injectable()
export class PnjCharacteristicService {
  constructor(
    @InjectRepository(PnjCharacteristic)
    private readonly pnjCharacteristicRepository:Repository<PnjCharacteristic>,
    private characteristicService:CharacteristicService,
  ){}
  async create(createPnjCharacteristicDto: CreatePnjCharacteristicDto) {
    const characteristic= await this.characteristicService.findOne(createPnjCharacteristicDto.characteristicId);
    const newPnjCharacteristic= new PnjCharacteristic();
    newPnjCharacteristic.value=createPnjCharacteristicDto.value;
    newPnjCharacteristic.characteristic=characteristic;
    newPnjCharacteristic.bonus=Math.floor((createPnjCharacteristicDto.value-10)/2);
    return await this.pnjCharacteristicRepository.save(newPnjCharacteristic);
  }

  findAll() {
    return `This action returns all pnjCharacteristic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pnjCharacteristic`;
  }
  async findAllByPnj(pnj:Pnj){
    return await this.pnjCharacteristicRepository.find({pnj:pnj})
  }

  update(id: number, updatePnjCharacteristicDto: UpdatePnjCharacteristicDto) {
    return `This action updates a #${id} pnjCharacteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} pnjCharacteristic`;
  }
}
