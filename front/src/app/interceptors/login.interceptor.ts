import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {


  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const currentUser = localStorage.getItem("currentUser")

    if(currentUser){

      const cloneReq = request.clone({

        params : new HttpParams().set( "access_token",currentUser )
      
      })

      return next.handle(cloneReq)
    }

    return next.handle(request);

  }
}

export const LoginInterceptorProvider = {

  provide: HTTP_INTERCEPTORS,
  useClass:LoginInterceptor,
  multi:true

}
