import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CreateCharacterDto } from '../models/dtos/character/create-character.dto';
import { GetCharacterDto } from '../models/dtos/character/get-character.dto';
import { Pj } from '../models/pj';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {



  constructor(private http:HttpClient) { }


  getCharactersByUser():Observable<Pj[]>{
    return this.http.get<GetCharacterDto[]>(environment.baseApiUrl + 'character')
    .pipe(
      
      map((pjArray:GetCharacterDto[])=>{

        return pjArray.map((pj:GetCharacterDto)=>{

          return Pj.fromDto(pj)
        })
      })
    )
  }


  createPj(pj:Pj):Observable<Pj>{
    console.log(pj)
    return this.http.post<GetCharacterDto>(environment.baseApiUrl + `character`,pj.toCreateDto())
    .pipe(
      
      map((character:GetCharacterDto)=>{

        return Pj.fromDto(character)
      })
    )
  }

}
