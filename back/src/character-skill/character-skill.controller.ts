import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CharacterSkillService } from './character-skill.service';
import { CreateCharacterSkillDto } from './dto/create-character-skill.dto';
import { UpdateCharacterSkillDto } from './dto/update-character-skill.dto';

@Controller('character-skill')
export class CharacterSkillController {
  constructor(private readonly characterSkillService: CharacterSkillService) {}
  
  

  @Get()
  findAll() {
    return this.characterSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.characterSkillService.findOne(id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateCharacterSkillDto: UpdateCharacterSkillDto) {
    return this.characterSkillService.update(id, updateCharacterSkillDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.characterSkillService.remove(id);
  }

  @Delete('delete/id')
  delete(@Param('id',ParseIntPipe) id: number) {
    return this.characterSkillService.delete(id);
  }
}
