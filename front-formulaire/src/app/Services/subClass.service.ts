import { Injectable } from '@angular/core';
import { SubClassDto } from '../DTOs/subClass.dto';
import { SubClassModel } from '../Models/subClass.model';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubClassService {

constructor(private http:HttpClient) { }

public getAllSubClasses(){
  return this.http.get<SubClassDto[]>('http://localhost:3000/sub-class')
  .pipe(
    map((arraySubClass:SubClassDto[])=>arraySubClass
    .map((subClassfound:SubClassDto)=>SubClassModel.fromSubClassDto(subClassfound)))
  )
}

}
