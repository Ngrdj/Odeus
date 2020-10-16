import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Capacity } from 'src/app/models/capacity';
import { Character } from 'src/app/models/character';
import { Characteristic } from 'src/app/models/characteristic';
import { Class } from 'src/app/models/class';
import { ClassEnum } from 'src/app/models/enums/class.enum';
import { Pj } from 'src/app/models/pj';
import { Race } from 'src/app/models/race';
import { Skill } from 'src/app/models/skill';
import { Story } from 'src/app/models/story';
import { SubClass } from 'src/app/models/subClass';
import { CreateTeamDialog } from '../create-team.dialog/create-team.dialog.component';


export interface DialogData {

  characteristics:Characteristic[];
  classes:Class[];
  races:Race[];
  skills:Skill[];
  stories:Story[];

}

@Component({
  selector: 'app-create-character.dialog',
  templateUrl: './create-character.dialog.component.html',
  styleUrls: ['./create-character.dialog.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  character:FormGroup;

  maxCharacteristicPoints:number = 27;
  characteristicPoints:number = 0;

  currentPortrait:string = "https://img.freepik.com/vecteurs-libre/dragon-silhouette_23-2147510587.jpg?size=338&ext=jpg";

  currentClass:Class;
  currentCapacities:Capacity[]=[];

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

  specializedClasses = [ClassEnum.WIZARD]

  hasSpecialization:boolean=false;
  
  displayInfos:boolean=false;
  displayRaces:boolean=false;
  displayClasses:boolean=false;
  displaySpecialization:boolean=false;

  constructor(
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<CreateTeamDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData

    ) { }

  ngOnInit(): void {

    this.setDatas()
    this.generateForm()
    this.setCurrentClass()

  }

  generateForm(){

    this.character = this.formBuilder.group({

      name:this.formBuilder.control("",Validators.required),
      class:this.formBuilder.control("WARRIOR",Validators.required),
      subClass:this.formBuilder.array([
        {
          name:this.formBuilder.control("",Validators.required),
          value:this.formBuilder.control(0,Validators.required), 
        }
      ]),
      race:this.formBuilder.control("HUMAN",Validators.required),
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

    this.characteristics = this.data.characteristics;
    this.classes = this.data.classes;
    this.races = this.data.races;
    this.skills = this.data.skills;
    this.stories = this.data.stories;

  }
  onSubmitForm(){

      console.log(this.character)

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

        const charactControls = [

          this.character.controls.strength,
          this.character.controls.dexterity,
          this.character.controls.constitution,
          this.character.controls.intelligence,
          this.character.controls.wisdom,
          this.character.controls.charisma

        ]

        charactControls.forEach(charact => {

          charact.setValue(10);

        })

        this.refreshAllCharactBonus()
        
      }

    }else(this.character.controls.level.setValue(this.character.controls.level.value-1))
    this.setCurrentCapacities()


  }
  onLevelPlusClick(){

    const addPointLevel=[4,8,12,16,20]
    if(addPointLevel.includes(this.character.controls.level.value+1)){

      this.characteristicPoints+=1

    }
    this.character.controls.level.setValue(this.character.controls.level.value+1)
    this.setCurrentCapacities()

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
  private refreshAllCharactBonus(){

      this.strengthBonus = this.getCharactBonus(this.character.controls['strength'].value)
      this.dexterityBonus = this.getCharactBonus(this.character.controls['dexterity'].value)
      this.intelligenceBonus = this.getCharactBonus(this.character.controls['intelligence'].value)
      this.constitutionBonus = this.getCharactBonus(this.character.controls['constitution'].value)
      this.wisdomBonus = this.getCharactBonus(this.character.controls['wisdom'].value)
      this.charismaBonus = this.getCharactBonus(this.character.controls['charisma'].value);


  }
  private getCharactBonus(value:number){

    return Math.floor((value-10)/2)

  }
  setCurrentClass(){

    this.currentClass = this.classes.find(charClass => charClass.name === this.character.controls.class.value)
    this.setCurrentCapacities()

  }

  setCurrentCapacities(){

    const capacities = []

    this.currentClass
    .subClasses.forEach(subClass => capacities.push(...subClass.capacities.filter(capacity => capacity.level <= this.character.controls.level.value)))
    this.currentCapacities = capacities
    console.log(this.currentCapacities)

  }

}
