import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CharacterEntity } from './character.entity';
import { CharacterDto } from './DTOs/character-dto';


@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(CharacterEntity)
        private characterRepository:Repository<CharacterEntity>
    ){}

    async getAllCharacters():Promise<CharacterEntity[]>{ 
        return await this.characterRepository.find()
    }

    async getCharacterById(id:number):Promise<CharacterEntity>{   
        const character= await this.characterRepository.findOne(id)
        
        if(character){  

            return character

        }else{
             throw new NotFoundException('Character Introuvable')
        }
    }

    async softDeleteCharacter(id:number){                    
        const Character= await this.getCharacterById(id)

        if(Character.deletedAt){                             

            throw new Error('Character Déja Supprimé'); 

        }else{

            this.characterRepository.softRemove(Character)

        }
    }

    // Ajout des caracterCapacities
    async createCharacter(character:CharacterDto){
        return await character
    }
}
