import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Capacity } from 'src/app/models/capacity';
import { Characteristic } from 'src/app/models/characteristic';
import { Class } from 'src/app/models/class';
import { AlignmentEnum } from 'src/app/models/enums/alignment.enum';
import { ClassEnum } from 'src/app/models/enums/class.enum';
import { GenderEnum } from 'src/app/models/enums/gender.enum';
import { RaceEnum } from 'src/app/models/enums/race.enum';
import { StoryEnum } from 'src/app/models/enums/story.enum';
import { Race } from 'src/app/models/race';
import { Skill } from 'src/app/models/skill';
import { Story } from 'src/app/models/story';
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

  characterForm:FormGroup;

  genderEnum = GenderEnum;
  genderEnumValues=Object.values(GenderEnum);

  alignmentEnum = AlignmentEnum;
  alignmentEnumValues = Object.values(AlignmentEnum);

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
  displayStory:boolean=false;




  constructor(
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<CreateTeamDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData

    ) {console.log(this.genderEnum) }


  ngOnInit(): void {

    this.setDatas()
    this.generateForm()
    this.setCurrentClass()

  }

  generateForm(){

    this.characterForm = this.formBuilder.group({

      name:this.formBuilder.control("",Validators.required),
      class:this.formBuilder.control(ClassEnum.WARRIOR,Validators.required),
      subClass:this.formBuilder.array([
        {
          name:this.formBuilder.control("",Validators.required),
          value:this.formBuilder.control(0,Validators.required), 
        }
      ]),
      race:this.formBuilder.control(RaceEnum.HUMAN,Validators.required),
      level:this.formBuilder.control(1,Validators.required),
      strength:this.formBuilder.control(10,Validators.required),
      dexterity:this.formBuilder.control(10,Validators.required),
      constitution:this.formBuilder.control(10,Validators.required),
      intelligence:this.formBuilder.control(10,Validators.required),
      wisdom:this.formBuilder.control(10,Validators.required),
      charisma:this.formBuilder.control(10,Validators.required),
      resume:this.formBuilder.control("Description du personnage ",Validators.required),
      portrait:this.formBuilder.control(""),
      alignment:this.formBuilder.control(AlignmentEnum.NEUTRAL),
      story:this.formBuilder.control(StoryEnum.HERO,Validators.required),
      gender:this.formBuilder.control(GenderEnum.OTHERS,Validators.required),
      age:this.formBuilder.control(18,Validators.required),

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

    const values = []

    Object.keys(this.characterForm.controls).forEach(control => {

      values.push({
        name:control,
        value:this.characterForm.controls[control].value
      })
      
    });
      console.log(this.characterForm.controls)

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

      this.characterForm.controls.strength.value,
      this.characterForm.controls.dexterity.value,
      this.characterForm.controls.constitution.value,
      this.characterForm.controls.intelligence.value,
      this.characterForm.controls.wisdom.value,
      this.characterForm.controls.charisma.value,

    ]

    if(characteristicsValues.some(char => char!=10)){

      const confirmChange = confirm("réduire le niveau ? (ceci réinitialisera les caractéristiques du personnage)")

      if(confirmChange){

        this.characterForm.controls.level.setValue(this.characterForm.controls.level.value-1)

        const charactControls = [

          this.characterForm.controls.strength,
          this.characterForm.controls.dexterity,
          this.characterForm.controls.constitution,
          this.characterForm.controls.intelligence,
          this.characterForm.controls.wisdom,
          this.characterForm.controls.charisma

        ]

        charactControls.forEach(charact => {

          charact.setValue(10);

        })

        this.refreshAllCharactBonus()
        
      }

    }else(this.characterForm.controls.level.setValue(this.characterForm.controls.level.value-1))
    this.setCurrentCapacities()


  }
  onLevelPlusClick(){

    const addPointLevel=[4,8,12,16,20]
    if(addPointLevel.includes(this.characterForm.controls.level.value+1)){

      this.characteristicPoints+=1

    }
    this.characterForm.controls.level.setValue(this.characterForm.controls.level.value+1)
    this.setCurrentCapacities()

  }

  onCharactLessClick(characteristic:string){

    this.characterForm.controls[characteristic].setValue(this.characterForm.controls[characteristic].value-1)
    this.refreshCharactBonus(characteristic)

  }
  onCharactPlusClick(characteristic:string){

    this.characterForm.controls[characteristic].setValue(this.characterForm.controls[characteristic].value+1)
    this.refreshCharactBonus(characteristic)

  }
  private refreshCharactBonus(characteristic:string){

    switch(characteristic){

      case 'strength': this.strengthBonus = this.getCharactBonus(this.characterForm.controls[characteristic].value);break;
      case 'dexterity': this.dexterityBonus = this.getCharactBonus(this.characterForm.controls[characteristic].value);break;
      case 'intelligence': this.intelligenceBonus = this.getCharactBonus(this.characterForm.controls[characteristic].value);break;
      case 'constitution': this.constitutionBonus = this.getCharactBonus(this.characterForm.controls[characteristic].value);break;
      case 'wisdom': this.wisdomBonus = this.getCharactBonus(this.characterForm.controls[characteristic].value);break;
      case 'charisma': this.charismaBonus = this.getCharactBonus(this.characterForm.controls[characteristic].value);break;

    }

  }
  private refreshAllCharactBonus(){

      this.strengthBonus = this.getCharactBonus(this.characterForm.controls['strength'].value)
      this.dexterityBonus = this.getCharactBonus(this.characterForm.controls['dexterity'].value)
      this.intelligenceBonus = this.getCharactBonus(this.characterForm.controls['intelligence'].value)
      this.constitutionBonus = this.getCharactBonus(this.characterForm.controls['constitution'].value)
      this.wisdomBonus = this.getCharactBonus(this.characterForm.controls['wisdom'].value)
      this.charismaBonus = this.getCharactBonus(this.characterForm.controls['charisma'].value);


  }
  private getCharactBonus(value:number){

    return Math.floor((value-10)/2)

  }
  setCurrentClass(){

    this.currentClass = this.classes.find(charClass => charClass.name === this.characterForm.controls.class.value)

    this.setCurrentCapacities()

  }

  setCurrentCapacities(){

    const capacities = []

    this.currentClass
    .subClasses.forEach(subClass => capacities.push(...subClass.capacities.filter(capacity => capacity.level <= this.characterForm.controls.level.value)))
    this.currentCapacities = capacities
    console.log(this.currentCapacities)

  }

}
