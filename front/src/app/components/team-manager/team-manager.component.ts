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
  @Input() heroes:Team = new Team("Heroes",[]);
  @Input() teams:Team[];
  @Input() pnjList:Pnj[];

  selectedTag:number=0;
  selectedTeam:Team;

  selectedCharacter:Character

  @Output() characterDetails:EventEmitter<Character> = new EventEmitter();
  @Output() addCharacterToAllies:EventEmitter<Character> = new EventEmitter();
  @Output() addCharacterToEnemies:EventEmitter<Character> = new EventEmitter();


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
  onCharacterDetailsClick(character:Character){

    this.characterDetails.emit(character)

  }
  onChangeTagName(teamIndex,newName){

    this.teams[teamIndex].name = newName;

  }
  onAddTeamClick(){

    this.openCreateTeamDialog()

  }
  openCreateTeamDialog(){

    const dialogRef = this.dialog.open(CreateTeamDialog, {
      width: '250px',
      data:{characters:this.characters.concat(this.pnjList)},
      panelClass:'panelDialog'
    });
    dialogRef.afterClosed().subscribe(datas =>{

      if(datas){

        this.teams.push(datas)
        this.changeSelectedTeam(this.teams.length-1)

      }

    })

  }

  onAddCharacterToAllies(character:Character){

    this.addCharacterToAllies.emit(character)

  }

  onAddCharacterToEnemies(character:Character){

    this.addCharacterToEnemies.emit(character)


  }
  onAddTeamToAllies(){

    this.selectedTeam.members.forEach(member => this.addCharacterToAllies.emit(member))

  }
  onAddTeamToEnemies(){

    this.selectedTeam.members.forEach(member => this.addCharacterToEnemies.emit(member))

  }
  onDeleteTeam(){

    const confirmDelete = confirm(`supprimer l'équipe \"${this.selectedTeam.name}\" ?`)

    if(confirmDelete){

      this.teams = this.teams.filter(team => team != this.selectedTeam)
      this.changeSelectedTeam(this.teams.length>0?this.teams.length-1:-1)
    }

  }

  changeSelectedTeam(index?:number){



    if(index >= 0){

      this.selectedTeam = this.teams[index]
      this.selectedTag = index+1

    }else{
      
      this.selectedTeam = this.heroes
      this.selectedTag = 0

    }


  }

}
