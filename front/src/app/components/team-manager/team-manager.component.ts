import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTeamDialog } from 'src/app/dialogs/create-team.dialog/create-team.dialog.component';
import { Character } from 'src/app/models/character';
import { Pnj } from 'src/app/models/pnj';
import { Team } from 'src/app/models/team';


@Component({
  selector: 'team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.scss']
})
export class TeamManagerComponent implements OnInit {

  @Input() characters:Character[]
  @Input() heroes:Team;
  @Input() teams:Team[];
  @Input() pnjList:Pnj[];

  selectedTag:number=0;
  selectedTeam:Team;

  selectedCharacter:Character

  @Output() characterSelected:EventEmitter<Character> = new EventEmitter();

  constructor(private dialog: MatDialog) { }

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
  onAddTeamClick(){

    this.openDialog()

  }
  openDialog(){

    const dialogRef = this.dialog.open(CreateTeamDialog, {
      width: '250px',
      data:{characters:this.characters.concat(this.pnjList)},
      panelClass:'panelDialog'
    });
    dialogRef.afterClosed().subscribe(datas =>{

      if(datas){

        this.teams.push(datas)

      }

    })

  }

}
