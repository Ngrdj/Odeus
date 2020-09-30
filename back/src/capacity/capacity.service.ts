import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CapacitiesDto } from './capacities-dto';
import { CapacitiesEntity } from './capacities.entity';

@Injectable()
export class CapacityService {
    constructor(
        @InjectRepository(CapacitiesEntity)
        private capacitiesRepository:Repository<CapacitiesEntity>
    ){}

    async getAllCapacities():Promise<CapacitiesEntity[]>{
        return await this.capacitiesRepository.find()
    }

    async getCapacityById(id:number):Promise<CapacitiesEntity>{
        const capacity = await this.capacitiesRepository.findOne(id)

        if(capacity){  

            return capacity

        }else{
             throw new NotFoundException('capacity Introuvable')
        }
    }

    async getCapacityByClass(classCharacter):Promise<CapacitiesEntity[]>{
        return await this.capacitiesRepository.find({
            where:{
                class:classCharacter
            }
        })
    }

    async softDeleteCapacity(id:number){
        const Capacity= await this.getCapacityById(id)

        if(Capacity.deletedAt){                             

            throw new Error('Capacity Déja Supprimé'); 

        }else{

            this.capacitiesRepository.softRemove(Capacity)

        }
    }

    createCapacity(newCapacity:CapacitiesDto){

        return this.capacitiesRepository.save(newCapacity)
    }

    
 }
