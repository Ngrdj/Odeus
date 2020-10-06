import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacterService } from 'src/character/character.service';
import { Character } from 'src/character/entities/character.entity';
import { CharacteristicService } from 'src/characteristic/characteristic.service';
import { Repository } from 'typeorm';
import { CreateCharacterCharacteristicDto } from './dto/create-character-characteristic.dto';
import { UpdateCharacterCharacteristicDto } from './dto/update-character-characteristic.dto';
import { CharacterCharacteristic } from './entities/character-characteristic.entity';

@Injectable()
export class CharacterCharacteristicService {
  constructor(@InjectRepository(CharacterCharacteristic)
   private readonly characterCharacteristicRepository:Repository<CharacterCharacteristic>,
   private characteristicService:CharacteristicService
   ){}
  async create(createCharacterCharacteristicDto: CreateCharacterCharacteristicDto,character:Character) {
    const characteristic= await this.characteristicService.findOne(createCharacterCharacteristicDto.characteristicId);
    const newCharacterCharacteristic= new CharacterCharacteristic();
    newCharacterCharacteristic.value=createCharacterCharacteristicDto.value;
    newCharacterCharacteristic.character=character;
    newCharacterCharacteristic.characteristic=characteristic;
    newCharacterCharacteristic.bonus= Math.floor((createCharacterCharacteristicDto.value-10)/2);

    return this.characterCharacteristicRepository.save(newCharacterCharacteristic);
  }

  findAll() {
    return this.characterCharacteristicRepository.find();
  }

  findOne(id: number) {
    return this.characterCharacteristicRepository.findOne(id);
  }

  update(id: number, updateCharacterCharacteristicDto: UpdateCharacterCharacteristicDto) {
    return `This action updates a #${id} characterCharacteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} characterCharacteristic`;
  }

}
