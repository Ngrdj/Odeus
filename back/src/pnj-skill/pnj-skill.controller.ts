import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PnjSkillService } from './pnj-skill.service';
import { CreatePnjSkillDto } from './dto/create-pnj-skill.dto';
import { UpdatePnjSkillDto } from './dto/update-pnj-skill.dto';

@Controller('pnj-skill')
export class PnjSkillController {
  constructor(private readonly pnjSkillService: PnjSkillService) {}
  
  

  @Get()
  findAll() {
    return this.pnjSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pnjSkillService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePnjSkillDto: UpdatePnjSkillDto) {
    return this.pnjSkillService.update(+id, updatePnjSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pnjSkillService.remove(+id);
  }
}
