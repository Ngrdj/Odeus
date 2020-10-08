import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CharacteristicService } from './characteristic.service';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';

@Controller('characteristic')
export class CharacteristicController {
  constructor(private readonly characteristicService: CharacteristicService) {}
  
  @Post()
  create(@Body() createCharacteristicDto: CreateCharacteristicDto) {
    return this.characteristicService.create(createCharacteristicDto);
  }

  @Get()
  findAll() {
    return this.characteristicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.characteristicService.findOne(id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateCharacteristicDto: UpdateCharacteristicDto) {
    return this.characteristicService.update(id, updateCharacteristicDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.characteristicService.delete(id);
  }

  @Delete('delete/id')
  delete(@Param('id',ParseIntPipe) id: number) {
    return this.characteristicService.delete(id);
  }
}
