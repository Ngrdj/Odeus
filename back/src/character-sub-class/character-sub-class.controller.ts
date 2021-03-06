import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CharacterSubClassService } from './character-sub-class.service';
import { CreateCharacterSubClassDto } from './dto/create-character-sub-class.dto';
import { UpdateCharacterSubClassDto } from './dto/update-character-sub-class.dto';

@Controller('character-sub-class')
export class CharacterSubClassController {
  constructor(private readonly characterSubClassService: CharacterSubClassService) {}
  
  

  @Get()
  findAll() {
    return this.characterSubClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterSubClassService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateCharacterSubClassDto: UpdateCharacterSubClassDto) {
    return this.characterSubClassService.update(id, updateCharacterSubClassDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.characterSubClassService.remove(id);
  }

  @Delete('delete/id')
  delete(@Param('id',ParseIntPipe) id: number) {
    return this.characterSubClassService.delete(id);
  }
}
