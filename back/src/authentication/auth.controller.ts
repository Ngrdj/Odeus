import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { BasicGuard } from 'src/guards/basic.guard';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
    constructor(private authService:AuthService){}

    @UseGuards(BasicGuard)
    @Get()
    login(@Req()request){
        return this.authService.login(request.user)
    }

 }
