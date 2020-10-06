import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { race } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';
import { Race } from './entities/race.entity';

@Injectable()
export class RaceService {
  constructor(@InjectRepository(Race) private readonly raceRepository:Repository<Race>){}

  create(createRaceDto: CreateRaceDto) {
    const newRace= new Race();
    newRace.name=createRaceDto.name;
    newRace.strBonus=createRaceDto.strBonus;
    newRace.dexBonus=createRaceDto.dexBonus;
    newRace.constBonus=createRaceDto.constBonus;
    newRace.intBonus=createRaceDto.intBonus;
    newRace.wisBonus=createRaceDto.wisBonus;
    newRace.chaBonus=createRaceDto.chaBonus;
    return this.raceRepository.save(newRace);
  }

  async findAll() {
    return await this.raceRepository.find();
  }

  async findOne(id: number) {
    return await this.raceRepository.findOne(id);
  }
  async findOneByName(name:string){
    return await this.raceRepository.findOne({name:name})
  }

  async update(id: number, updateRaceDto: UpdateRaceDto) {
    const race= await this.findOne(id);
    race.name=updateRaceDto.name;
    race.strBonus=updateRaceDto.strBonus;
    race.dexBonus=updateRaceDto.dexBonus;
    race.constBonus=updateRaceDto.constBonus;
    race.intBonus=updateRaceDto.intBonus;
    race.wisBonus=updateRaceDto.wisBonus;
    race.chaBonus=updateRaceDto.chaBonus;
    return this.raceRepository.save(race);
  }

  async remove(id: number) {
    const race= await this.findOne(id);
    return this.raceRepository.softDelete(race);
  }
}
