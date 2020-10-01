import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards/jwt.guard';
import { UserDto } from './DTOs/user-dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @UseGuards(JwtGuard)
    @Get()
    async getAllUsers(@Req() req):Promise<UserEntity[]>{
        return await req.user;
    }

    //@UseGuards(JwtGuard)
    @Post()
    postUser(@Body() newUser:UserDto){
        console.log(newUser)
        return this.userService.createUser(newUser)
    }


 }
