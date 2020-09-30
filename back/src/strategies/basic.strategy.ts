import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport/dist/passport/passport.strategy";

import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../authentication/constant';

@Injectable()
export class Basic extends PassportStrategy(Strategy)  {
    constructor(){
        super({jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
            session: false});
    }
    async validate(payload:any){
        return {userid:payload.sub, userName: payload.userName}
    }
}
