import { UserDto } from './dtos/user.dto'
import { RolesEnum } from './enums/roles.enum'

export class User {

    constructor(

        public name:string,
        public login:string,
        public password:string,
        public email:string,
        public role?:RolesEnum

    ){}


    static fromDto(userDto:UserDto):User{

        return new User(

            userDto.name,
            userDto.login,
            userDto.password,
            userDto.email

        )

    }
    toDto(){
        return{
            
            name:this.name,
            login:this.login,
            password:this.password,
            email:this.email

        }

    }

}
