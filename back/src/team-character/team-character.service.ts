import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamCharacterDto } from './dto/create-team-character.dto';
import { UpdateTeamCharacterDto } from './dto/update-team-character.dto';
import { TeamCharacter } from './entities/team-character.entity';

@Injectable()
export class TeamCharacterService {
  constructor(@InjectRepository(TeamCharacter) private readonly teamCharacterRepository:Repository<TeamCharacter>){}

  create(createTeamCharacterDto: CreateTeamCharacterDto) {
    return 'This action adds a new teamCharacter';
  }

  async findAll() {
    return await this.teamCharacterRepository.find();
  }

  async findOne(id: number) {
    return await this.teamCharacterRepository.findOne(id);
  }

  update(id: number, updateTeamCharacterDto: UpdateTeamCharacterDto) {
    return `This action updates a #${id} teamCharacter`;
  }

  async remove(id: number) {
    const teamCharacter=await this.findOne(id);
    return this.teamCharacterRepository.softRemove(teamCharacter);
  }

  async delete(id:number){
    const teamCharacter=await this.findOne(id);
    return this.teamCharacterRepository.delete(teamCharacter);
  }
}
