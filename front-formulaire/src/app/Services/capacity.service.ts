import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CapacityModel } from '../Models/capacity.model';
import { Observable } from 'rxjs';
import { CapacityDto } from '../DTOs/capacity.dto';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CapacityService {

constructor(private http:HttpClient) { }



  
}
