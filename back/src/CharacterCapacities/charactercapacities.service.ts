import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharacterCapacitiesEntity } from './characterCapacities.entity';
import { CharacterCapacitiesDto } from './DTOs/charactercapacities-dto';

@Injectable()
export class CharacterCapacitiesService { 
    constructor(
        @InjectRepository(CharacterCapacitiesEntity)
        private characterCapacitiesRepository:Repository<CharacterCapacitiesEntity>
    ){}

    async getAllCharacterCapacitiess():Promise<CharacterCapacitiesEntity[]>{
        return await this.characterCapacitiesRepository.find()
    }

    async getCharacterCapacitiesById(id:number):Promise<CharacterCapacitiesEntity>{
        const characterCapacities = await this.characterCapacitiesRepository.findOne(id)

        if(characterCapacities){  

            return characterCapacities

        }else{
             throw new NotFoundException('CharacterCapacities Introuvable')
        }
    }

    async softDeleteCharacterCapacities(id:number){
        const characterCapacities= await this.getCharacterCapacitiesById(id)

        if(characterCapacities.deletedAt){                             

            throw new Error('CharacterCapacities Déja Supprimé'); 

        }else{

            this.characterCapacitiesRepository.softRemove(characterCapacities)

        }
    }

    createCharacterCapacities(newCharacterCapacities:CharacterCapacitiesDto){

        return this.characterCapacitiesRepository.save(newCharacterCapacities)
    }
}
