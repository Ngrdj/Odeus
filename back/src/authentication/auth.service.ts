import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/DTOs/user-dto';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
      ) {}

      validateUser(login,password){
        const foundUser=this.usersService.getUserByName(login)
        if(!foundUser){
            throw new UnauthorizedException()
        }
        return foundUser;
    }

    async login(user: UserDto) {
        const payload = { username: user.login, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
 }
