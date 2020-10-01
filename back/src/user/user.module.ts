import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport/dist/passport.module';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    exports:[UserService],
    controllers: [
        UserController,],
    providers: [
        UserService],
})
export class UserModule { }
