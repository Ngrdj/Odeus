import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PnjService } from './pnj.service';
import { CreatePnjDto } from './dto/create-pnj.dto';
import { UpdatePnjDto } from './dto/update-pnj.dto';

@Controller('pnj')
export class PnjController {
  constructor(private readonly pnjService: PnjService) {}
  
  @Post()
  create(@Body() createPnjDto: CreatePnjDto) {
    return this.pnjService.create(createPnjDto);
  }

  @Get()
  findAll() {
    return this.pnjService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pnjService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePnjDto: UpdatePnjDto) {
    return this.pnjService.update(+id, updatePnjDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pnjService.remove(+id);
  }
}
