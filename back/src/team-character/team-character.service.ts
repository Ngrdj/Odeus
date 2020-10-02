import { Injectable } from '@nestjs/common';
import { CreateTeamCharacterDto } from './dto/create-team-character.dto';
import { UpdateTeamCharacterDto } from './dto/update-team-character.dto';

@Injectable()
export class TeamCharacterService {
  create(createTeamCharacterDto: CreateTeamCharacterDto) {
    return 'This action adds a new teamCharacter';
  }

  findAll() {
    return `This action returns all teamCharacter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamCharacter`;
  }

  update(id: number, updateTeamCharacterDto: UpdateTeamCharacterDto) {
    return `This action updates a #${id} teamCharacter`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamCharacter`;
  }
}
