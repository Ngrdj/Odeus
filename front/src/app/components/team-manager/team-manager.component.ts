import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Team } from 'src/app/models/interfaces/team';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.scss']
})
export class TeamManagerComponent implements OnInit {


  heroes:Team
  teams:Team[];
  selectedTag:number=0;
  selectedTeam:Team;

  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {

    this.teams = this.charactersService.getTeams()
    this.heroes = this.charactersService.getHeroes()
    this.selectedTeam = this.heroes

  }

  onSelectTeam(teamIndex){

    this.selectedTeam = this.teams[teamIndex]

  }
  onSelectHeroes(){

    this.selectedTeam = this.heroes

  }
  onChangeTagName(teamIndex,newName){

    this.teams[teamIndex].name = newName;

  }

}
