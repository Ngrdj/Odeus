import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { BonusScenarioService } from './bonus-scenario.service';
import { CreateBonusScenarioDto } from './dto/create-bonus-scenario.dto';
import { UpdateBonusScenarioDto } from './dto/update-bonus-scenario.dto';

@Controller('bonus-scenario')
export class BonusScenarioController {
  constructor(private readonly bonusScenarioService: BonusScenarioService) {}
  
  @Post()
  create(@Body() createBonusScenarioDto: CreateBonusScenarioDto) {
    return this.bonusScenarioService.create(createBonusScenarioDto);
  }

  @Get()
  findAll() {
    return this.bonusScenarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bonusScenarioService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bonusScenarioService.remove(+id);
  }
}
