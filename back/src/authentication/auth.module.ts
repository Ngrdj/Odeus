import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { Basic } from 'src/strategies/basic.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../authentication/constant';
import { JwtGuard } from 'src/guards/jwt.guard';
import { Jwt } from 'src/strategies/jwt.strategy';

@Module({
    imports: [UserModule,
         PassportModule,
         JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '600s' },
      }),],
      exports:[JwtGuard],
    providers: [AuthService,Basic,JwtGuard,Jwt],
    controllers:[AuthController]
})
export class AuthModule { }
