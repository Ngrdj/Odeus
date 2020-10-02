import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CharacterClassService } from './character-class.service';
import { CreateCharacterClassDto } from './dto/create-character-class.dto';
import { UpdateCharacterClassDto } from './dto/update-character-class.dto';

@Controller('character-class')
export class CharacterClassController {
  constructor(private readonly characterClassService: CharacterClassService) {}
  
  @Post()
  create(@Body() createCharacterClassDto: CreateCharacterClassDto) {
    return this.characterClassService.create(createCharacterClassDto);
  }

  @Get()
  findAll() {
    return this.characterClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterClassService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCharacterClassDto: UpdateCharacterClassDto) {
    return this.characterClassService.update(+id, updateCharacterClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterClassService.remove(+id);
  }
}
