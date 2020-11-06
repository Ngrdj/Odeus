import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Capacity } from '../models/capacity';
import { Character } from '../models/character';
import { CharacterCharacteristic } from '../models/characterCharacteristic';
import { GetCharacterDto } from '../models/dtos/character/get-character.dto';
import { ClassEnum } from '../models/enums/class.enum';
import { Pj } from '../models/pj';
import { PjSubClass } from '../models/pjSubClass';
import { Pnj } from '../models/pnj';
import { Story } from '../models/story';
import { SubClass } from '../models/subClass';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {



  constructor(private http:HttpClient) { }


  getCharacterByUser():Observable<Pj[]>{
    return this.http.get<GetCharacterDto[]>(environment.baseApiUrl + 'character')
    .pipe(
      
      map((pjArray:GetCharacterDto[])=>{

        return pjArray.map((pj:GetCharacterDto)=>{

          return Pj.fromDto(pj)
        })
      })
    )
  }


  addCharacter(character:Character){

  }

}
