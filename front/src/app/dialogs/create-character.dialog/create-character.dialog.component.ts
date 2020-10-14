import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Capacity } from 'src/app/models/capacity';
import { Character } from 'src/app/models/character';
import { Characteristic } from 'src/app/models/characteristic';
import { Class } from 'src/app/models/class';
import { Race } from 'src/app/models/race';
import { Skill } from 'src/app/models/skill';
import { Story } from 'src/app/models/story';
import { SubClass } from 'src/app/models/subClass';
import { CreateTeamDialog } from '../create-team.dialog/create-team.dialog.component';


export interface DialogData {

  capacities:Capacity[];
  characteristics:Characteristic[];
  classes:Class[];
  races:Race[];
  skills:Skill[];
  stories:Story[];
  subClasses:SubClass[];

}

@Component({
  selector: 'app-create-character.dialog',
  templateUrl: './create-character.dialog.component.html',
  styleUrls: ['./create-character.dialog.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  character:FormGroup

  currentPortrait:string = "https://img.freepik.com/vecteurs-libre/dragon-silhouette_23-2147510587.jpg?size=338&ext=jpg";

  capacities:Capacity[];
  characteristics:Characteristic[];
  classes:Class[];
  races:Race[];
  skills:Skill[];
  stories:Story[];
  subClasses:SubClass[];
  
  displayRaces:boolean=false;
  displayClasses:boolean=false;

  constructor(
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<CreateTeamDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData

    ) { }

  ngOnInit(): void {
    this.setDatas()
    this.generateForm()
  }

  generateForm(){

    this.character = this.formBuilder.group({

      name:this.formBuilder.control("",Validators.required),
      class:this.formBuilder.control("",Validators.required),
      subClass:this.formBuilder.array([
        {
          name:this.formBuilder.control("",Validators.required),
          value:this.formBuilder.control(0,Validators.required), 
        }
      ]),
      race:this.formBuilder.control("",Validators.required),
      level:this.formBuilder.control(1,Validators.required),
      strength:this.formBuilder.control(10,Validators.required),
      dexterity:this.formBuilder.control(10,Validators.required),
      constitution:this.formBuilder.control(10,Validators.required),
      intelligence:this.formBuilder.control(10,Validators.required),
      wisdow:this.formBuilder.control(10,Validators.required),
      charisma:this.formBuilder.control(10,Validators.required),
      resume:this.formBuilder.control("",Validators.required),
      portrait:this.formBuilder.control(""),
      alignment:this.formBuilder.control(""),
      story:this.formBuilder.control("",Validators.required),
      gender:this.formBuilder.control("",Validators.required),
      age:this.formBuilder.control(0,Validators.required),

    })

  }
  setDatas(){

    this.capacities = this.data.capacities;
    this.characteristics = this.data.characteristics;
    this.classes = this.data.classes;
    this.races = this.data.races;
    this.skills = this.data.skills;
    this.stories = this.data.stories;
    this.subClasses = this.data.subClasses;

  }
  onSubmitForm(){

      const newCharacter = new Character(

        0,
        this.character.controls.name.value,
        this.character.controls.portrait.value,

      )
      console.log(newCharacter)

  }
  private getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
  setCurrentPortrait(file:File){

    this.getBase64(file).then(

      data => {this.currentPortrait = data.toString()}

    )
  }

}
