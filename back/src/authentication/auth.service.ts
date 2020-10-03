import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/DTOs/user-dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/user/user.entity';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService
      ) {}

      async validateUser(login,password){
        const foundUser= await this.usersService.getUserByName(login)
        
        if(!foundUser){
            throw new UnauthorizedException()
        }
        const cryptedPassword= await bcrypt.hash(password, foundUser.salt)
        if(foundUser.password!==cryptedPassword){
          throw new UnauthorizedException()
        }
        return foundUser;
    }

    async login(user: UserEntity) {
        const payload = { username: user.login, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
 }
