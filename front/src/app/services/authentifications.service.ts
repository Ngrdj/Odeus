import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { encode } from "js-base64"

@Injectable({
  providedIn: 'root'
})
export class AuthentificationsService {

  constructor(private http:HttpClient ) { }

  loginUser(login,password){

    const currentUser = localStorage.getItem("currentUser");

    if(currentUser){

      const params = new HttpParams().set("access_token",currentUser);
      const datas = encode(login + ":" + password);

      const headers = new HttpHeaders()
        .set('Authorization', 'Basic' + datas)

      return this.http.get("localhost:3000/user",{headers:headers})

    }

  }

  addUser(name:string,user:any){

    localStorage.setItem(name,JSON.stringify(user))

    console.log(localStorage)


  }

}
