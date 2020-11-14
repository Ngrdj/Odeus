import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TwistScenarioService } from './twist-scenario.service';
import { CreateTwistScenarioDto } from './dto/create-twist-scenario.dto';
import { UpdateTwistScenarioDto } from './dto/update-twist-scenario.dto';

@Controller('twist-scenario')
export class TwistScenarioController {
  constructor(private readonly twistScenarioService: TwistScenarioService) {}
  
  @Post()
  create(@Body() createTwistScenarioDto: CreateTwistScenarioDto) {
    return this.twistScenarioService.create(createTwistScenarioDto);
  }

  @Get()
  findAll() {
    return this.twistScenarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.twistScenarioService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.twistScenarioService.remove(+id);
  }
}
