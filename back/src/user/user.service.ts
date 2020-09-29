import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './DTOs/user-dto';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity)
    private userRepository:Repository<UserEntity>){}

    async getAllUsers():Promise<UserEntity[]>{
        return await this.userRepository.find()
    }

    async createUser(userDto:UserDto){

        const user = this.userRepository.create({...userDto});
        user.salt= await bcrypt.genSalt();
        user.password= await bcrypt.hash(user.password, user.salt)
        try{
            await this.userRepository.save(user)
        }catch(e){
            throw new ConflictException();
        }
        
        return user

    }

    validateUser(login,password){
        const foundUser=this.userRepository.findOne({login,password}
        )
        if(!foundUser){
            throw new UnauthorizedException()
        }
        return foundUser;
    }
 }
