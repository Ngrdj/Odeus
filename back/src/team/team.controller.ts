import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, Req, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { JwtGuard } from 'src/guards/jwt.guard';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}
  
  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createTeamDto: CreateTeamDto,@Req()request) {
    return this.teamService.create(createTeamDto,request.user.sub);
  }

  @UseGuards(JwtGuard)
  @Get()
  findAll(@Req()request) {
   
    return this.teamService.findAll(request.user.sub);
    
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.teamService.findOne(id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(id, updateTeamDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.teamService.remove(id);
  }

  @Delete('delete/id')
  delete(@Param('id',ParseIntPipe) id: number) {
    return this.teamService.delete(id);
  }
}
