import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }


  addUser(name:string,user:any){

    localStorage.setItem(name,JSON.stringify(user))

    console.log(localStorage)


  }

}
