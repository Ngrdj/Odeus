import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
      ) {}

      async validateUser(login,password){
        const foundUser= await this.userService.findOneByLogin(login)
        
        if(!foundUser){
            throw new UnauthorizedException()
        }
        const cryptedPassword= await bcrypt.hash(password,bcrypt.genSalt(10))
        if(foundUser.password!==cryptedPassword){
          throw new UnauthorizedException()
        }
        return foundUser;
    }

    async login(user: User) {
        const payload = { username: user.login, sub: user.id, userRole: user.role };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
 }
