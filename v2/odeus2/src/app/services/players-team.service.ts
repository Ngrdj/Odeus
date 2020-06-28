import { Injectable } from '@angular/core';
import { playableCharacter } from '../models/pc';
import { persos } from '../JSONSources/persos';
import { characterRace } from '../models/characterRace';
import { characterClass } from '../models/characterClass';

@Injectable({
  providedIn: 'root'
})
export class PlayersTeamService {

  private playersList:playableCharacter[] = [];

  constructor() { 

    persos.forEach(element => this.playersList.push(new playableCharacter(element.charName,new characterRace(element.charRace),new characterClass(element.charClass))))

  }
  getPlayersList(){

    return this.playersList;

  }
  addPlayer(newPlayer:playableCharacter){

    this.playersList.push(newPlayer);

  }
  removePlayer(player:playableCharacter){

    this.playersList.filter(element => element != player);

  }
}
