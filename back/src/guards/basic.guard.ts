
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { Observable } from 'rxjs';


export class BasicGuard extends AuthGuard('basic') {
  
}
