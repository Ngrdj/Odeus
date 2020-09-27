import { Injectable } from '@angular/core';
import { Team } from '../models/interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private heroes:Team = {name:"Héros",members:[{name:"Namas"},{name:"Kyra"},{name:"Grudu"},{name:"Lyre"},{name:"Esus"}]};
  private teams:Team[]=[

    {name:"Embuscade de la forêt",members:[{name:"Loup"},{name:"Loup"},{name:"Loup Alpha"},{name:"Nymphe"},{name:"Essaim d'abeilles"}]},
    {name:"Monstres infernaux",members:[{name:"Lyche"},{name:"Demon"},{name:"Demon"},{name:"Mort-vivant"},{name:"Mort-vivant"}]},
    {name:"Rencontre en montagne",members:[{name:"Troll"},{name:"Troll"},{name:"Goblin"},{name:"Goblin"},{name:"Goblin"}]},

  ]

  constructor() { }

  getTeams():Team[]{

    return this.teams

  }
  getHeroes():Team{

    return this.heroes

  }

}
