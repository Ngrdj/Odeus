import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CharacteristicDto } from './characteristic-dto';
import { CharacteristicEntity } from './characteristic.entity';
import { CharacteristicService } from './characteristic.service';

@Controller('characteristic')
export class CharacteristicController {
    constructor(private readonly characteristicService:CharacteristicService){

    }

    @Get()
    async getAllCharacteristic():Promise<CharacteristicEntity[]>{
        return await this.characteristicService.getAllCharacteristics();
    }

    @Get('/:id')
    async getCharacteristicById(@Param('id',ParseIntPipe)id:number):Promise<CharacteristicEntity>{
        return this.characteristicService.getCharacteristicById(id)
    }

    @UsePipes(new ValidationPipe({transform:true}))
    @Post()
    async postCharacteristic(@Body()newCharacteristic:CharacteristicDto):Promise<CharacteristicEntity>{
        return await this.characteristicService.createCharacteristic(newCharacteristic);
    }

    @Delete()
    async deleteCharacteristic(@Param('id',ParseIntPipe)id:number){
        await this.characteristicService.softDeleteCharacteristic(id)
    }
}
