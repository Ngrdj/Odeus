import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EnemyScenarioService } from './enemy-scenario.service';
import { CreateEnemyScenarioDto } from './dto/create-enemy-scenario.dto';
import { UpdateEnemyScenarioDto } from './dto/update-enemy-scenario.dto';

@Controller('enemy-scenario')
export class EnemyScenarioController {
  constructor(private readonly enemyScenarioService: EnemyScenarioService) {}
  
  @Post()
  create(@Body() createEnemyScenarioDto: CreateEnemyScenarioDto) {
    return this.enemyScenarioService.create(createEnemyScenarioDto);
  }

  @Get()
  findAll() {
    return this.enemyScenarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enemyScenarioService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enemyScenarioService.remove(+id);
  }
}
