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
        return await this.capacityService.getAllCapacities();
    }

    @Get('/:id')
    async getCapacityById(@Param('id',ParseIntPipe)id:number):Promise<CapacitiesEntity>{
        return this.capacityService.getCapacityById(id)
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
