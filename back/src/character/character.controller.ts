import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CharacterEntity } from './character.entity';
import { CharacterService } from './character.service';
import { CharacterDto } from './DTOs/character-dto';

@Controller('character')
export class CharacterController {
    constructor(private readonly characterService:CharacterService){}

    @Get()  //verbe
    async getAllCharacters():Promise<CharacterEntity[]>{
        return await this.characterService.getAllCharacters();
    }

    @Get('/:id')
    async getCharacterById(@Param('id',ParseIntPipe)id:number){
        return await this.characterService.getCharacterById(id);
    }

    @Post()
    async postCharacter(@Body()newCharacter:CharacterDto){
        return await this.characterService.createCharacter(newCharacter);
    }

    @Delete('/id')
    async deleteCharacter(@Param('id',ParseIntPipe)id:number){
        await this.characterService.softDeleteCharacter(id);
    }

}
