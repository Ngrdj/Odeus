import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassCharacterEntity } from './classCharacter.entity';
import { ClassCharacterDto } from './DTOs/classCharacter-dto';

@Injectable()
export class ClassCharacterService {
    constructor(
        @InjectRepository(ClassCharacterEntity)
        private classCharacterRepository:Repository<ClassCharacterEntity>
    ){}

    async getAllClassCharacters():Promise<ClassCharacterEntity[]>{
        return await this.classCharacterRepository.find()
    }

    async getClassCharacterById(id:number):Promise<ClassCharacterEntity>{
        const classCharacter = await this.classCharacterRepository.findOne(id)

        if(classCharacter){  

            return classCharacter

        }else{
             throw new NotFoundException('ClassCharacter Introuvable')
        }
    }

    async softDeleteClassCharacter(id:number){
        const classCharacter= await this.getClassCharacterById(id)

        if(classCharacter.deletedAt){                             

            throw new Error('ClassCharacter Déja Supprimé'); 

        }else{

            this.classCharacterRepository.softRemove(classCharacter)

        }
    }

    createClassCharacter(newClassCharacter:ClassCharacterDto){

        return this.classCharacterRepository.save(newClassCharacter)
    }
}
