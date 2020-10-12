import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from 'src/character/entities/character.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(@InjectRepository(Team) private readonly teamRepository:Repository<Team>, private userService:UserService){}

 async create(createTeamDto: CreateTeamDto,login) {
    const charactersId=[]
    const user= await this.userService.findOneByLogin(login)
    for (const characterId of createTeamDto.characters) {
      
      charactersId.push(characterId)
    }
    
    const newTeam=new Team();
    newTeam.name=createTeamDto.name;
    newTeam.user=user;
    newTeam.characters=charactersId;
    this.teamRepository.save(newTeam)
    return 'This action adds a new team';
  }

  async findAll() {
    return await this.teamRepository.find();
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
