import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { throws } from 'assert';
import { BasicGuard } from 'src/guards/basic.guard';
import { UserDto } from './DTOs/user-dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @UseGuards(BasicGuard)
    @Get()
    async getAllUsers(@Req() req):Promise<UserEntity[]>{
        return await req.user;
    }

    @Post()
    postUser(@Body() newUser:UserDto){
        console.log(newUser)
        return this.userService.createUser(newUser)
    }


 }
