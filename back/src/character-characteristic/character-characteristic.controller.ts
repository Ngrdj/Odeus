import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CharacterCharacteristicService } from './character-characteristic.service';
import { CreateCharacterCharacteristicDto } from './dto/create-character-characteristic.dto';
import { UpdateCharacterCharacteristicDto } from './dto/update-character-characteristic.dto';

@Controller('character-characteristic')
export class CharacterCharacteristicController {
  constructor(private readonly characterCharacteristicService: CharacterCharacteristicService) {}
  

  @Get()
  findAll() {
    return this.characterCharacteristicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.characterCharacteristicService.findOne(id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateCharacterCharacteristicDto: UpdateCharacterCharacteristicDto) {
    return this.characterCharacteristicService.update(id, updateCharacterCharacteristicDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.characterCharacteristicService.remove(id);
  }

  @Delete('delete/id')
  delete(@Param('id',ParseIntPipe) id: number) {
    return this.characterCharacteristicService.delete(id);
  }
}
