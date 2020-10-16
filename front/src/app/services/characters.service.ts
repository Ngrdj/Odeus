import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Capacity } from '../models/capacity';
import { Character } from '../models/character';
import { CharacterCharacteristic } from '../models/characterCharacteristic';
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


  private heroes:Team = new Team("Héros",
  [

  
  ]);

  private teams:Team[]=[

    new Team("Equipe 1 ",[]),

  ]

  constructor(private http:HttpClient) { }

  getTeams():Team[]{

    return this.teams

  }
  getHeroes():Team{

    return this.heroes

  }


  addCharacter(character:Character){

  }

}
