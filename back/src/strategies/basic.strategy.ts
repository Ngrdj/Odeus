import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport/dist/passport/passport.strategy";
import { BasicStrategy } from 'passport-http';
import { UserService } from "src/user/user.service";

@Injectable()
export class Basic extends PassportStrategy(BasicStrategy)  {
    constructor(private userService:UserService){
        super({session: false});
    }
    async validate(userName:string, password:string){
        const user= await this .userService.validateUser(userName,password);
        return user;
    }
}
