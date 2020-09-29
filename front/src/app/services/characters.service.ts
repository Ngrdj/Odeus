import { Injectable } from '@angular/core';
import { Team } from '../models/interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private heroes:Team = {name:"Héros",
  members:[

    {name:"Namas",portrait:"assets/portraits/Namas.jpg"},
    {name:"Kyra",portrait:"assets/portraits/ky_yra.jpg"},
    {name:"Grudu",portrait:"assets/portraits/grudu.jpg"},
    {name:"Lyre",portrait:"assets/portraits/lyra.jpg"},
    {name:"Esus",portrait:"assets/portraits/esus.jpg"}
  
  ]};
  private teams:Team[]=[

    {name:"Embuscade de la forêt",members:[{name:"Loup"},{name:"Loup"},{name:"Loup Alpha"},{name:"Nymphe"},{name:"Essaim d'abeilles"}]},
    {name:"Monstres infernaux",members:[{name:"Lyche"},{name:"Demon"},{name:"Demon"},{name:"Mort-vivant"},{name:"Mort-vivant"}]},
    {name:"Rencontre en montagne",members:[{name:"Troll"},{name:"Troll"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"}]},

  ]

  constructor() { }

  getTeams():Team[]{

    return this.teams

  }
  getHeroes():Team{

    return this.heroes

  }

}
