import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SkillDto } from './skill-dto';
import { SkillEntity } from './skill.entity';

@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(SkillEntity)
        private skillRepository:Repository<SkillEntity>
    ){}

    async getAllSkills():Promise<SkillEntity[]>{
        return await this.skillRepository.find()
    }

    async getSkillById(id:number):Promise<SkillEntity>{
        const Skill = await this.skillRepository.findOne(id)

        if(Skill){  

            return Skill

        }else{
             throw new NotFoundException('Skill Introuvable')
        }
    }

    async softDeleteSkill(id:number){
        const skill= await this.getSkillById(id)

        if(skill.deletedAt){                             

            throw new Error('Skill Déja Supprimé'); 

        }else{

            this.skillRepository.softRemove(skill)

        }
    }

    createSkill(newSkill:SkillDto){

        return this.skillRepository.save(newSkill)
    }

    
 }
