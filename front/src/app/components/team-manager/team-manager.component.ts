import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Team } from 'src/app/models/interfaces/team';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.scss']
})
export class TeamManagerComponent implements OnInit {


  @Input() heroes:Team;
  @Input() teams:Team[];

  selectedTag:number=0;
  selectedTeam:Team;

  selectedCharacter:Character

  @Output() characterSelected:EventEmitter<Character> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.selectedTeam = this.heroes

  }

  onSelectTeam(teamIndex){

    this.selectedTeam = this.teams[teamIndex]

  }
  onSelectHeroes(){

    this.selectedTeam = this.heroes

  }
  onSelectCharacter(character:Character){

    this.characterSelected.emit(character)

  }
  onChangeTagName(teamIndex,newName){

    this.teams[teamIndex].name = newName;

  }

}
