import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req, ParseIntPipe } from '@nestjs/common';
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
    return this.characterService.create(createCharacterDto,request.user.userLogin);
  }

  @UseGuards(JwtGuard)
  @Get()
  async findAll(@Req()request) {
    return await this.characterService.findAll(request.user.userLogin);
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.characterService.findOne(id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateCharacterDto: UpdateCharacterDto) {
    return this.characterService.update(id, updateCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.characterService.remove(id);
  }
}
