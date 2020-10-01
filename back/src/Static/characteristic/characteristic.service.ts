import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharacteristicDto } from './characteristic-dto';
import { CharacteristicEntity } from './characteristic.entity';

@Injectable()
export class CharacteristicService {
    constructor(
        @InjectRepository(CharacteristicEntity)
        private characteristicRepository:Repository<CharacteristicEntity>
    ){}

    async getAllCharacteristics():Promise<CharacteristicEntity[]>{
        return await this.characteristicRepository.find()
    }

    async getCharacteristicById(id:number):Promise<CharacteristicEntity>{
        const characteristic = await this.characteristicRepository.findOne(id)

        if(characteristic){  

            return characteristic

        }else{
             throw new NotFoundException('Characteristic Introuvable')
        }
    }

    async softDeleteCharacteristic(id:number){
        const characteristic= await this.getCharacteristicById(id)

        if(characteristic.deletedAt){                             

            throw new Error('Characteristic Déja Supprimé'); 

        }else{

            this.characteristicRepository.softRemove(characteristic)

        }
    }

    createCharacteristic(newCharacteristic:CharacteristicDto){

        return this.characteristicRepository.save(newCharacteristic)
    }
}
