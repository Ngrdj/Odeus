import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharacterService } from 'src/character/character.service';
import { Character } from 'src/character/entities/character.entity';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(@InjectRepository(Team) private readonly teamRepository:Repository<Team>, private characterService:CharacterService){}

 async create(createTeamDto: CreateTeamDto,id) {
    const charactersId=[]
    for (const characterId of createTeamDto.characters) {
      
      const characterFound= await this.characterService.findOne(characterId)
      charactersId.push(characterFound)
    }
    
    const newTeam=new Team();
    newTeam.name=createTeamDto.name;
    newTeam.userId=id;
    newTeam.characters=charactersId;
    
    return this.teamRepository.save(newTeam);
  }

  async findAll(id) {
    
    return await this.teamRepository.find({userId:id});
  }

  async findOne(id: number) {
    return await this.teamRepository.findOne(id);
  }

  async findOneByCharacter(character:Character){
    
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  async remove(id: number) {
    const team=await this.findOne(id);
    return this.teamRepository.softRemove(team);
  }

  async delete(id:number){
    const team=await this.findOne(id);
    return this.teamRepository.delete(team);
  }
}
