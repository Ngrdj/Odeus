import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport/dist/passport/passport.strategy";

import { BasicStrategy } from 'passport-http';
import { AuthService } from "src/authentication/auth.service";

@Injectable()
export class Basic extends PassportStrategy(BasicStrategy)  {
    constructor(private authService:AuthService){
        super({
            session: false});
    }
    async validate(login:string,password:string){
        return await this.authService.validateUser(login,password)
    }
}
