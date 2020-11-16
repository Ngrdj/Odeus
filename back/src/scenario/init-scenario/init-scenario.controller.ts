import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { InitScenarioService } from './init-scenario.service';
import { CreateInitScenarioDto } from './dto/create-init-scenario.dto';
import { UpdateInitScenarioDto } from './dto/update-init-scenario.dto';
import { InitScenario } from './entities/init-scenario.entity';

@Controller('init-scenario')
export class InitScenarioController {
  constructor(private readonly initScenarioService: InitScenarioService) {}
  
  @Post()
  create(@Body() createInitScenarioDto: CreateInitScenarioDto) {
    const init=new InitScenario();
    init.label=createInitScenarioDto.label
    return this.initScenarioService.create(init);
  }

  @Get()
  findAll() {
    return this.initScenarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.initScenarioService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.initScenarioService.remove(+id);
  }
}
