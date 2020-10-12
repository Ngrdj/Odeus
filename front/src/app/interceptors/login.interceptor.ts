import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable()
export class LoginInterceptor implements HttpInterceptor {


  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const currentUser = sessionStorage.getItem("currentUser")

 

    if(currentUser){

      const cloneReq = request.clone({
      
        setHeaders: {Authorization:"Bearer " + currentUser}
      
      })

      return next.handle(cloneReq)
        
      
    }

    return next.handle(request);

  }

  checkError(error:HttpErrorResponse){

    switch(error.status){

      case 401: 

        break;

      default: 

    }

  }

}

export const LoginInterceptorProvider = {

  provide: HTTP_INTERCEPTORS,
  useClass:LoginInterceptor,
  multi:true

}
