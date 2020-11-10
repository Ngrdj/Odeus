import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import jwt_decode from "jwt-decode";
import { GetUserDto } from '../models/dtos/user/get-user.dto';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  createUser(user:User):Observable<GetUserDto>{

    return this.http.post<GetUserDto>("http://localhost:3000/user",user.toDto())

  }
  getCurrentUser():Observable<User>{

    let currentUser = sessionStorage.getItem("currentUser")
    if(currentUser){

      return this.getUserByLogin(jwt_decode(currentUser).userLogin)

    }
    return of(null)
  }
  
  private getUserByLogin(login:string):Observable<User>{

    return this.http.get<GetUserDto>(`http://localhost:3000/user/login/${login}`)
      .pipe(

        map(userFound => {return User.fromDto(userFound)})

      )

  }
}
