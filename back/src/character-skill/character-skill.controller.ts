import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CharacterSkillService } from './character-skill.service';
import { CreateCharacterSkillDto } from './dto/create-character-skill.dto';
import { UpdateCharacterSkillDto } from './dto/update-character-skill.dto';

@Controller('character-skill')
export class CharacterSkillController {
  constructor(private readonly characterSkillService: CharacterSkillService) {}
  
  @Post()
  create(@Body() createCharacterSkillDto: CreateCharacterSkillDto) {
    return this.characterSkillService.create(createCharacterSkillDto);
  }

  @Get()
  findAll() {
    return this.characterSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterSkillService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCharacterSkillDto: UpdateCharacterSkillDto) {
    return this.characterSkillService.update(+id, updateCharacterSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterSkillService.remove(+id);
  }
}
