import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CharacterCapacitiesEntity } from './characterCapacities.entity';
import { CharacterCapacitiesService } from './charactercapacities.service';
import { CharacterCapacitiesDto } from './DTOs/charactercapacities-dto';

@Controller()
export class CharacterCapacitiesController { 
    constructor(private readonly characterCapacitiesService:CharacterCapacitiesService){

    }

    @Get()
    async getAllCharacterCapacities():Promise<CharacterCapacitiesEntity[]>{
        return await this.characterCapacitiesService.getAllCharacterCapacitiess();
    }

    @Get('/:id')
    async getCharacterCapacitiesById(@Param('id',ParseIntPipe)id:number):Promise<CharacterCapacitiesEntity>{
        return this.characterCapacitiesService.getCharacterCapacitiesById(id)
    }

    @UsePipes(new ValidationPipe({transform:true}))
    @Post()
    async postCharacterCapacities(@Body()newCharacterCapacities:CharacterCapacitiesDto):Promise<CharacterCapacitiesEntity>{
        return await this.characterCapacitiesService.createCharacterCapacities(newCharacterCapacities);
    }

    @Delete()
    async deleteCharacterCapacities(@Param('id',ParseIntPipe)id:number){
        await this.characterCapacitiesService.softDeleteCharacterCapacities(id)
    }
}
