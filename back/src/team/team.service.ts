import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamDto } from './DTOs/team-dto';
import { TeamEntity } from './team.entity';

@Injectable()
export class TeamService { 
    constructor(
        @InjectRepository(TeamEntity)
        private teamRepository:Repository<TeamEntity>
    ){}

    async getAllTeam():Promise<TeamEntity[]>{
        return await this.teamRepository.find()
    }

    async getTeamById(id:number):Promise<TeamEntity>{
        const team = await this.teamRepository.findOne(id)

        if(team){  

            return team

        }else{
             throw new NotFoundException('team Introuvable')
        }
    }

    async softDeleteTeam(id:number){
        const team = await this.getTeamById(id)

        if(team.deletedAt){                             

            throw new Error('team Déja Supprimé'); 

        }else{

            this.teamRepository.softRemove(team)

        }
    }

    createTeam(newTeam:TeamDto){

        return this.teamRepository.save(newTeam)
    }

    
}
