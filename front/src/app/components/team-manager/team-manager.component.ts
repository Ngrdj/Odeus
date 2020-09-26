import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Team } from 'src/app/models/interfaces/team';

@Component({
  selector: 'team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.scss']
})
export class TeamManagerComponent implements OnInit {


  teams:Team[] = [{members:[{name:"Namas"},{name:"Lyre"},{name:"Kyra"}],name:"embuscade"},{members:[],name:"embuscade"},{members:[],name:"embuscade"},{members:[],name:"embuscade"}];
  selectedTag:number=0;
  selectedTeam:Team;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectTeam(teamIndex){

    this.selectedTeam = this.teams[teamIndex]

  }

}
