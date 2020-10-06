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
    user.role=RoleEnum.USER;
    user.login=createUserDto.login;
    user.password = await bcrypt.hash(createUserDto.password,bcrypt.genSalt(10))
        try{
            await this.userRepository.save(user)
        }catch(e){
            throw new ConflictException();
        }
        
        return user

    }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  findOneByLogin(login:string){

    return this.userRepository.findOne(login)
    
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
