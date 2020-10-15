import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Capacity } from 'src/app/models/capacity';
import { Character } from 'src/app/models/character';
import { Characteristic } from 'src/app/models/characteristic';
import { Class } from 'src/app/models/class';
import { CharacteristicEnum } from 'src/app/models/enums/characteristic.enum';
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

  character:FormGroup;

  characteristicPoints:number = 0;

  currentPortrait:string = "https://img.freepik.com/vecteurs-libre/dragon-silhouette_23-2147510587.jpg?size=338&ext=jpg";

  strengthBonus:number = 0;
  dexterityBonus:number = 0;
  constitutionBonus:number = 0;
  intelligenceBonus:number = 0;
  wisdomBonus:number = 0;
  charismaBonus:number = 0;

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
      wisdom:this.formBuilder.control(10,Validators.required),
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
  onLevelLessClick(){

    const characteristicsValues = [

      this.character.controls.strength.value,
      this.character.controls.dexterity.value,
      this.character.controls.constitution.value,
      this.character.controls.intelligence.value,
      this.character.controls.wisdom.value,
      this.character.controls.charisma.value,

    ]

    if(characteristicsValues.some(char => char!=10)){

      const confirmChange = confirm("réduire le niveau ? (ceci réinitialisera les caractéristiques du personnage)")

      if(confirmChange){

        this.character.controls.level.setValue(this.character.controls.level.value-1)
        this.character.controls.strength.setValue(10);
        this.character.controls.dexterity.setValue(10);
        this.character.controls.constitution.setValue(10);
        this.character.controls.intelligence.setValue(10);
        this.character.controls.wisdom.setValue(10);
        this.character.controls.charisma.setValue(10);

      }

    }else(this.character.controls.level.setValue(this.character.controls.level.value-1))

  }
  onLevelPlusClick(){

    const addPointLevel=[4,8,12,16,20]
    if(addPointLevel.includes(this.character.controls.level.value+1)){

      this.characteristicPoints+=1

    }
    this.character.controls.level.setValue(this.character.controls.level.value+1)

  }

  onCharactLessClick(characteristic:string){

    this.character.controls[characteristic].setValue(this.character.controls[characteristic].value-1)
    this.refreshCharactBonus(characteristic)

  }
  onCharactPlusClick(characteristic:string){

    this.character.controls[characteristic].setValue(this.character.controls[characteristic].value+1)
    this.refreshCharactBonus(characteristic)

  }
  private refreshCharactBonus(characteristic:string){

    switch(characteristic){

      case 'strength': this.strengthBonus = this.getCharactBonus(this.character.controls[characteristic].value);break;
      case 'dexterity': this.dexterityBonus = this.getCharactBonus(this.character.controls[characteristic].value);break;
      case 'intelligence': this.intelligenceBonus = this.getCharactBonus(this.character.controls[characteristic].value);break;
      case 'constitution': this.constitutionBonus = this.getCharactBonus(this.character.controls[characteristic].value);break;
      case 'wisdom': this.wisdomBonus = this.getCharactBonus(this.character.controls[characteristic].value);break;
      case 'charisma': this.charismaBonus = this.getCharactBonus(this.character.controls[characteristic].value);break;

    }

  }
  private getCharactBonus(value:number){

    return Math.floor((value-10)/2)

  }

}
