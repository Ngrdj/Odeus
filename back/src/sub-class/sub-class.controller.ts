import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SubClassService } from './sub-class.service';
import { CreateSubClassDto } from './dto/create-sub-class.dto';
import { UpdateSubClassDto } from './dto/update-sub-class.dto';

@Controller('sub-class')
export class SubClassController {
  constructor(private readonly subClassService: SubClassService) {}
  
  @Post()
  create(@Body() createSubClassDto: CreateSubClassDto) {
    return this.subClassService.create(createSubClassDto);
  }

  @Get()
  findAll() {
    return this.subClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subClassService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSubClassDto: UpdateSubClassDto) {
    return this.subClassService.update(+id, updateSubClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subClassService.remove(+id);
  }
}
