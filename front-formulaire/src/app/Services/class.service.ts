import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassDto } from '../DTOs/class.dto';
import { ClassModel } from '../Models/class.model';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

constructor(private http:HttpClient) { }

  public getAllClasses():Observable<ClassModel[]>{
    return this.http.get<ClassDto[]>('http://localhost:3000/class')
    .pipe(
      map((arrayClass:ClassDto[])=>arrayClass
      .map((classfound:ClassDto)=>ClassModel.fromClassDto(classfound)))
    )
  }
}
