import { Injectable } from '@nestjs/common';
import { CreateCharacterCharacteristicDto } from './dto/create-character-characteristic.dto';
import { UpdateCharacterCharacteristicDto } from './dto/update-character-characteristic.dto';

@Injectable()
export class CharacterCharacteristicService {
  create(createCharacterCharacteristicDto: CreateCharacterCharacteristicDto) {
    return 'This action adds a new characterCharacteristic';
  }

  findAll() {
    return `This action returns all characterCharacteristic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} characterCharacteristic`;
  }

  update(id: number, updateCharacterCharacteristicDto: UpdateCharacterCharacteristicDto) {
    return `This action updates a #${id} characterCharacteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} characterCharacteristic`;
  }
}
