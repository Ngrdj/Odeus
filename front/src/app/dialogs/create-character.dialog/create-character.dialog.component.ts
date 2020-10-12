import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';
import { ClassEnum } from 'src/app/models/enums/class.enum';
import { StoryEnum } from 'src/app/models/story.enum';
import { SubClassEnum } from 'src/app/models/subClass.enum';
import { CreateTeamDialog } from '../create-team.dialog/create-team.dialog.component';


export interface DialogData {

}

@Component({
  selector: 'app-create-character.dialog',
  templateUrl: './create-character.dialog.component.html',
  styleUrls: ['./create-character.dialog.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  character:FormGroup

  constructor(
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<CreateTeamDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData

    ) { }

  ngOnInit(): void {

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

}
