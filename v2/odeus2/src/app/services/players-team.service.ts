import { Injectable } from '@angular/core';
import { playableCharacter } from '../models/pc';

@Injectable({
  providedIn: 'root'
})
export class PlayersTeamService {

  private playersList:playableCharacter[] = [];

  constructor(newPlayersList:playableCharacter[]) { 

    this.playersList = newPlayersList;

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
