import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Basic } from 'src/strategies/basic.strategy';
import { PassportModule } from '@nestjs/passport/dist/passport.module';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity]),
    PassportModule.register({ defaultStrategy: 'basic' })],
    controllers: [
        UserController,],
    providers: [
        UserService,Basic],
})
export class UserModule { }
