import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { encode } from "js-base64"
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationsService {

  constructor(private http:HttpClient ) { }

  loginUser(login,password):Observable<any> | null{

    const currentUser = sessionStorage.getItem("currentUser");

    if(!currentUser){

      const datas = encode(login + ":" + password);

      const headers = new HttpHeaders()
        .set('Authorization', 'Basic ' + datas)

      return this.http.get<any>("http://localhost:3000/login",{headers:headers})
        .pipe(
          tap(value => sessionStorage.setItem('currentUser',value.access_token))
        )

    }
    return of(null)
  }


}
