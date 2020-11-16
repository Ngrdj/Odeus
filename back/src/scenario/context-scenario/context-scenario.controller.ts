import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ContextScenarioService } from './context-scenario.service';
import { CreateContextScenarioDto } from './dto/create-context-scenario.dto';
import { UpdateContextScenarioDto } from './dto/update-context-scenario.dto';

@Controller('context-scenario')
export class ContextScenarioController {
  constructor(private readonly contextScenarioService: ContextScenarioService) {}
  
  @Post()
  create(@Body() createContextScenarioDto: CreateContextScenarioDto) {
    return this.contextScenarioService.create(createContextScenarioDto);
  }

  @Get()
  findAll() {
    return this.contextScenarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contextScenarioService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contextScenarioService.remove(+id);
  }
}
