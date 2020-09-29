import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RaceDto } from './DTOs/race-dto';
import { RaceEntity } from './race.entity';

@Injectable()
export class RaceService { 
    constructor(
        @InjectRepository(RaceEntity)
        private raceRepository:Repository<RaceEntity>
    ){}

    async getAllRaces():Promise<RaceEntity[]>{
        return await this.raceRepository.find()
    }

    async getRaceById(id:number):Promise<RaceEntity>{
        const race = await this.raceRepository.findOne(id)

        if(race){  

            return race

        }else{
             throw new NotFoundException('Race Introuvable')
        }
    }

    async softDeleteRace(id:number){
        const race= await this.getRaceById(id)

        if(race.deletedAt){                             

            throw new Error('Race Déja Supprimé'); 

        }else{

            this.raceRepository.softRemove(race)

        }
    }

    createRace(newRace:RaceDto){

        return this.raceRepository.save(newRace)
    }
}
