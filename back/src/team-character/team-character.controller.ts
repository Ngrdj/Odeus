import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TeamCharacterService } from './team-character.service';
import { CreateTeamCharacterDto } from './dto/create-team-character.dto';
import { UpdateTeamCharacterDto } from './dto/update-team-character.dto';

@Controller('team-character')
export class TeamCharacterController {
  constructor(private readonly teamCharacterService: TeamCharacterService) {}
  
  @Post()
  create(@Body() createTeamCharacterDto: CreateTeamCharacterDto) {
    return this.teamCharacterService.create(createTeamCharacterDto);
  }

  @Get()
  findAll() {
    return this.teamCharacterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamCharacterService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTeamCharacterDto: UpdateTeamCharacterDto) {
    return this.teamCharacterService.update(+id, updateTeamCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamCharacterService.remove(+id);
  }
}
