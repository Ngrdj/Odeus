import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';
import { Pnj } from 'src/app/models/pnj';
import { Team } from 'src/app/models/team';


export interface DialogData {
  characters:Character[]
}

@Component({
  selector: 'createTeamDialog',
  templateUrl: './create-team.dialog.component.html',
  styleUrls: ['./create-team.dialog.component.scss']
})
export class CreateTeamDialog implements OnInit {

characters:Character[]
teamMembers:Character[]=[];

teamForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<CreateTeamDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData

    ){

      this.characters = data.characters
      this.sortCharacterByName()
      this.createFormBuilder()

    } 

  ngOnInit(): void {

    

  }

  createFormBuilder(){

    this.teamForm = this.formBuilder.group({

      name:this.formBuilder.control("",Validators.required),
      selectedChar:this.formBuilder.control("0")

    })
  
  }
  onAddCharacterClick(){

    this.teamMembers.push(this.characters[Number(this.teamForm.controls.selectedChar.value)])

  }
  onDeleteCharacterClick(character:Character){

    this.teamMembers.splice(this.teamMembers.indexOf(character),1)


  }
  onCreateTeamClick(){

    const confirmCancel = confirm(`Créer l'équipe " ${this.teamForm.controls.name.value} " ?`);
    if(confirmCancel){

      const newTeam = new Team(

        this.teamForm.controls.name.value,
        this.teamMembers,
        

      )

      this.dialogRef.close(newTeam)

    }

  }
  onCancelClick(){

    const confirmCancel = confirm("Annuler la création ?");
    if(confirmCancel){

      this.dialogRef.close()

    }

  }
  sortCharacterByName(){

    this.characters = this.characters.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 

  }
  numberOfChar(character:Character){

    return this.teamMembers.filter(element => element.name === character.name).length

  }
  getUniqueMembers(){

    return this.teamMembers.filter((element, index) => {
      const _element = JSON.stringify(element);
      return index === this.teamMembers.findIndex(obj => {
        return JSON.stringify(obj) === _element;
      });
    });

  }


}
