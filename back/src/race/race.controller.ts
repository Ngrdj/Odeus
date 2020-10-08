import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RaceService } from './race.service';
import { CreateRaceDto } from './dto/create-race.dto';
import { UpdateRaceDto } from './dto/update-race.dto';

@Controller('race')
export class RaceController {
  constructor(private readonly raceService: RaceService) {}
  
  @Post()
  create(@Body() createRaceDto: CreateRaceDto) {
    return this.raceService.create(createRaceDto);
  }

  @Get()
  findAll() {
    return this.raceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.raceService.findOne(id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateRaceDto: UpdateRaceDto) {
    return this.raceService.update(id, updateRaceDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.raceService.remove(id);
  }

  @Delete('delete/id')
  delete(@Param('id',ParseIntPipe) id: number) {
    return this.raceService.delete(id);
  }
}
