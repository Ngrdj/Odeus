import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDto } from '../models/dtos/user.dto';
import { User } from '../models/user';
import jwt_decode from "jwt-decode";



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  createUser(user:User):Observable<UserDto>{

    return this.http.post<UserDto>("http://localhost:3000/user",user.toDto())

  }
  getCurrentUser():Observable<User>{

    let currentUser = sessionStorage.getItem("currentUser")
    if(currentUser){
      console.log(jwt_decode(currentUser))

      return this.getUserByLogin(jwt_decode(currentUser).login)

    }
    return of(new User("Anonymous","","",""))
  }
  private getUserByLogin(login:string):Observable<User>{

    return this.http.get<UserDto>(`http://localhost:3000/user/${login}`)
      .pipe(

        map(userFound => {return User.fromDto(userFound)})

      )

  }

}
