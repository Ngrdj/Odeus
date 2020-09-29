import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClassCharacterEntity } from './classCharacter.entity';
import { ClassCharacterService } from './classCharacter.service';
import { ClassCharacterDto } from './DTOs/classCharacter-dto';

@Controller('class')
export class ClassCharacterController { 
        constructor(private readonly classCharacterService:ClassCharacterService){
    
        }
    
        @Get()
        async getAllClassCharacters():Promise<ClassCharacterEntity[]>{
            return await this.classCharacterService.getAllClassCharacters();
        }
    
        @Get('/:id')
        async getClassCharacterById(@Param('id',ParseIntPipe)id:number):Promise<ClassCharacterEntity>{
            return this.classCharacterService.getClassCharacterById(id)
        }
    
        @UsePipes(new ValidationPipe({transform:true}))
        @Post()
        async postClassCharacter(@Body()newClassCharacter:ClassCharacterDto):Promise<ClassCharacterEntity>{
            return await this.classCharacterService.createClassCharacter(newClassCharacter);
        }
    
        @Delete()
        async deleteClassCharacter(@Param('id',ParseIntPipe)id:number){
            await this.classCharacterService.softDeleteClassCharacter(id)
        }
}
