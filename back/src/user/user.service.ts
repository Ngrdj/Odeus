import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { RoleEnum } from './role.enum';
@Injectable()
export class UserService {

  constructor(@InjectRepository(User)
  private userRepository:Repository<User>,){}

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.name=createUserDto.name;
    user.email=createUserDto.email;
    user.role=RoleEnum.USER;
    user.login=createUserDto.login;
    user.salt= await bcrypt.genSalt();
    user.password = await bcrypt.hash(createUserDto.password,user.salt)
        try{
            await this.userRepository.save(user)
        }catch(e){
            throw new ConflictException();
        }
        
        return user

    }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  async findOneByLogin(login:string){
    const user=await this.userRepository.findOne({login:login});
    return user
    
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
