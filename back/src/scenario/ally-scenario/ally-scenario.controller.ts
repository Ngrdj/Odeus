import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AllyScenarioService } from './ally-scenario.service';
import { CreateAllyScenarioDto } from './dto/create-ally-scenario.dto';
import { UpdateAllyScenarioDto } from './dto/update-ally-scenario.dto';

@Controller('ally-scenario')
export class AllyScenarioController {
  constructor(private readonly allyScenarioService: AllyScenarioService) {}
  
  @Post()
  create(@Body() createAllyScenarioDto: CreateAllyScenarioDto) {
    return this.allyScenarioService.create(createAllyScenarioDto);
  }

  @Get()
  findAll() {
    return this.allyScenarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allyScenarioService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allyScenarioService.remove(+id);
  }
}
