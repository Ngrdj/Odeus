import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(@InjectRepository(Team) private readonly teamRepository:Repository<Team>){}

  create(createTeamDto: CreateTeamDto) {
    return 'This action adds a new team';
  }

  async findAll() {
    return await this.teamRepository.find();
  }

  async findOne(id: number) {
    return await this.teamRepository.findOne(id);
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
