import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CharacterCharacteristicService } from './character-characteristic.service';
import { CreateCharacterCharacteristicDto } from './dto/create-character-characteristic.dto';
import { UpdateCharacterCharacteristicDto } from './dto/update-character-characteristic.dto';

@Controller('character-characteristic')
export class CharacterCharacteristicController {
  constructor(private readonly characterCharacteristicService: CharacterCharacteristicService) {}
  
  @Post()
  create(@Body() createCharacterCharacteristicDto: CreateCharacterCharacteristicDto) {
    return this.characterCharacteristicService.create(createCharacterCharacteristicDto);
  }

  @Get()
  findAll() {
    return this.characterCharacteristicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterCharacteristicService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCharacterCharacteristicDto: UpdateCharacterCharacteristicDto) {
    return this.characterCharacteristicService.update(+id, updateCharacterCharacteristicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterCharacteristicService.remove(+id);
  }
}
