import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { RaceDto } from './DTOs/race-dto';
import { RaceEntity } from './race.entity';
import { RaceService } from './race.service';

@Controller('race')
export class RaceController {
    constructor(private readonly raceService:RaceService){

    }
    @Get()
    async getAllRace():Promise<RaceEntity[]>{
        return await this.raceService.getAllRaces();
    }

    @Get('/:id')
    async getRaceById(@Param('id',ParseIntPipe)id:number):Promise<RaceEntity>{
        return this.raceService.getRaceById(id)
    }

    @UsePipes(new ValidationPipe({transform:true}))
    @Post()
    async postRace(@Body()newRace:RaceDto):Promise<RaceEntity>{
        console.log(newRace)
        return await this.raceService.createRace(newRace);
    }

    @Delete()
    async deleteRace(@Param('id',ParseIntPipe)id:number){
        await this.raceService.softDeleteRace(id)
    }
}
