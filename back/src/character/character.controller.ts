import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { JwtGuard } from 'src/guards/jwt.guard';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @UseGuards(JwtGuard)
  @Post()
  
  create(@Body() createCharacterDto: CreateCharacterDto,@Req()request) {
    console.log(request.user)
    return this.characterService.create(createCharacterDto,request.user.userLogin);
  }

  @Get()
  async findAll() {
    return await this.characterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCharacterDto: UpdateCharacterDto) {
    return this.characterService.update(+id, updateCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterService.remove(+id);
  }
}
