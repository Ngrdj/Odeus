import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private heroes:Team = new Team("Héros",
  [

    {id:1, name:"Namas",portrait:"assets/portraits/Namas.jpg"},
    {id:2,name:"Kyra",portrait:"assets/portraits/ky_yra.jpg"},
    {id:3,name:"Grudu",portrait:"assets/portraits/grudu.jpg"},
    {id:4,name:"Lyre",portrait:"assets/portraits/lyra.jpg"},
    {id:5,name:"Esus",portrait:"assets/portraits/esus.jpg"}
  
  ]);
  private teams:Team[]=[

    new Team("Embuscade de la forêt",[{id:6,name:"Loup"},{id:6,name:"Loup"},{id:7,name:"Loup Alpha"},{id:8, name:"Nymphe"},{id:9,name:"Essaim d'abeilles"}]),
    new Team("Monstres infernaux",[{id:10,name:"Lyche"},{id:11,name:"Demon"},{id:11,name:"Demon"},{id:12,name:"Mort-vivant"},{id:12,name:"Mort-vivant"}]),
    new Team("Rencontre en montagne",[{id:13,name:"Troll"},{id:13,name:"Troll"},{id:14,name:"Goblin"},{id:14,name:"Goblin"},{id:14,name:"Goblin"},{id:14,name:"Goblin"},{id:14,name:"Goblin"},{id:14,name:"Goblin"},{id:14,name:"Goblin"}]),

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
