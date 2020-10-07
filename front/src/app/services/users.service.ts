import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from '../models/dtos/user.dto';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  createUser(user:User):Observable<UserDto>{

    return this.http.post<UserDto>("http://localhost:3000/user",user.toDto())

  }
  getCurrentUser(){

    const currentUser = sessionStorage.getItem("currentUser")
    console.log(currentUser)
  }

}
