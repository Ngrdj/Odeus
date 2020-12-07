import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from 'src/guards/jwt.guard';
import { Roles } from 'src/decorators/role.decorator';
import { RoleGuard } from 'src/guards/role.guard';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(JwtGuard,RoleGuard)
  @Roles('ADMIN')
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('id/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  @Get('login/:login')
  findOneByLogin(@Param('login')login:string){
    return this.userService.findOneByLogin(login);
  }

  @Put(':id')
  @Roles('USER')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @UseGuards(JwtGuard,RoleGuard)
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
