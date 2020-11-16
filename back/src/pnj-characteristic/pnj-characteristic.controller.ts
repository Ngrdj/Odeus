import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PnjCharacteristicService } from './pnj-characteristic.service';
import { CreatePnjCharacteristicDto } from './dto/create-pnj-characteristic.dto';
import { UpdatePnjCharacteristicDto } from './dto/update-pnj-characteristic.dto';

@Controller('pnj-characteristic')
export class PnjCharacteristicController {
  constructor(private readonly pnjCharacteristicService: PnjCharacteristicService) {}
  
  @Post()
  create(@Body() createPnjCharacteristicDto: CreatePnjCharacteristicDto) {
    return this.pnjCharacteristicService.create(createPnjCharacteristicDto);
  }

  @Get()
  findAll() {
    return this.pnjCharacteristicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pnjCharacteristicService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePnjCharacteristicDto: UpdatePnjCharacteristicDto) {
    return this.pnjCharacteristicService.update(+id, updatePnjCharacteristicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pnjCharacteristicService.remove(+id);
  }
}
