import { Injectable } from '@nestjs/common';
import { CreatePnjCharacteristicDto } from './dto/create-pnj-characteristic.dto';
import { UpdatePnjCharacteristicDto } from './dto/update-pnj-characteristic.dto';

@Injectable()
export class PnjCharacteristicService {
  create(createPnjCharacteristicDto: CreatePnjCharacteristicDto) {
    return 'This action adds a new pnjCharacteristic';
  }

  findAll() {
    return `This action returns all pnjCharacteristic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pnjCharacteristic`;
  }

  update(id: number, updatePnjCharacteristicDto: UpdatePnjCharacteristicDto) {
    return `This action updates a #${id} pnjCharacteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} pnjCharacteristic`;
  }
}
