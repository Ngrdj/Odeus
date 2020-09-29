import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TeamDto } from './DTOs/team-dto';
import { TeamEntity } from './team.entity';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
    constructor(private readonly teamService:TeamService){

    }

    @Get()
    async getAllTeam():Promise<TeamEntity[]>{
        return await this.teamService.getAllTeam();
    }

    @Get('/:id')
    async getTeamById(@Param('id',ParseIntPipe)id:number):Promise<TeamEntity>{
        return this.teamService.getTeamById(id)
    }

    @UsePipes(new ValidationPipe({transform:true}))
    @Post()
    async postTeam(@Body()newTeam:TeamDto):Promise<TeamEntity>{
        return await this.teamService.createTeam(newTeam);
    }

    @Delete()
    async deleteTeam(@Param('id',ParseIntPipe)id:number){
        await this.teamService.softDeleteTeam(id)
    }
}
