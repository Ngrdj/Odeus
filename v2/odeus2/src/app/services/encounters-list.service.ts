import { Injectable } from '@angular/core';
import { nonPlayableCharacter } from '../models/npc';

@Injectable({
  providedIn: 'root'
})
export class EncountersListService {

  private encountersList:nonPlayableCharacter[] = [];

  constructor() { }

  getEncountersList(){

    return this.encountersList;

  }
  addEncounter(newEncounter:nonPlayableCharacter){

    this.encountersList.push(newEncounter);

  }
  removeEncounter(encounter:nonPlayableCharacter){

    this.encountersList.filter(element => element != encounter);

  }
}
