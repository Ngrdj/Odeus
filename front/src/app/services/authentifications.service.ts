import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationsService {

  constructor( ) { }

  userLogged(){



  }
  addUser(name:string,user:any){

    localStorage.setItem(name,JSON.stringify(user))
    console.log(localStorage)


  }

}
