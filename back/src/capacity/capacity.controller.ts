import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CapacitiesDto } from './capacities-dto';
import { CapacitiesEntity } from './capacities.entity';
import { CapacityService } from './capacity.service';


@Controller('capacity')
export class CapacityController {
    constructor(private readonly capacityService:CapacityService){

    }

    @Get()
    async getAllCapacities():Promise<CapacitiesEntity[]>{
        console.log('coucou')
        return await this.capacityService.getAllCapacities();
    }

    @Get('/:id')
    async getCapacityById(@Param('id',ParseIntPipe)id:number):Promise<CapacitiesEntity>{
        return this.capacityService.getCapacityById(id)
    }
    @Get('/:classCharacter')
    async getCapacityByClass(@Param('classCharacter')classCharacter:string):Promise<CapacitiesEntity[]>{
        return this.capacityService.getCapacityByClass(classCharacter);
    }

    @UsePipes(new ValidationPipe({transform:true}))
    @Post()
    async postCapacity(@Body()newCapacity:CapacitiesDto):Promise<CapacitiesEntity>{
        return await this.capacityService.createCapacity(newCapacity);
    }

    @Delete()
    async deleteCapacity(@Param('id',ParseIntPipe)id:number){
        await this.capacityService.softDeleteCapacity(id)
    }
 }
