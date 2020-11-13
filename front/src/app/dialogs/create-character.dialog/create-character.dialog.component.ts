import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Capacity } from 'src/app/models/capacity';
import { CharacterCharacteristic } from 'src/app/models/characterCharacteristic';
import { Characteristic } from 'src/app/models/characteristic';
import { Class } from 'src/app/models/class';
import { AlignmentEnum } from 'src/app/models/enums/alignment.enum';
import { CharacteristicEnum } from 'src/app/models/enums/characteristic.enum';
import { ClassEnum } from 'src/app/models/enums/class.enum';
import { GenderEnum } from 'src/app/models/enums/gender.enum';
import { RaceEnum } from 'src/app/models/enums/race.enum';
import { StoryEnum } from 'src/app/models/enums/story.enum';
import { Pj } from 'src/app/models/pj';
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
      subClass:this.formBuilder.array([]),
      characteristics:this.formBuilder.array([]),
      race:this.formBuilder.control(RaceEnum.HUMAN,Validators.required),
      level:this.formBuilder.control(1,Validators.required),
      resume:this.formBuilder.control("Description du personnage ",Validators.required),
      portrait:this.formBuilder.control(""),
      alignment:this.formBuilder.control(AlignmentEnum.NEUTRAL),
      story:this.formBuilder.control(StoryEnum.HERO,Validators.required),
      gender:this.formBuilder.control(GenderEnum.OTHERS,Validators.required),
      age:this.formBuilder.control(18,Validators.required),

    })

    this.characteristics.forEach(characteristic => {

      (this.characterForm.get('characteristics') as FormArray).push(new FormGroup({

        name:new FormControl(characteristic.name),
        value:new FormControl(10),
        bonus:new FormControl(0),

      }))

    })

    console.log(this.characterForm)
  

  }

  getControllerValue(path:string){

    return this.characterForm.get(path).value

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
      console.log(values)



    /*const newPj = new Pj(
      0,
      this.characterForm.controls.name,
      "",
      this.characterForm.controls.race,
      this.characterForm.controls.level,
      
      ) */

  }
  
  setCurrentPortrait(file:File){

    this.getBase64(file).then(

      data => {this.currentPortrait = data.toString()}

    )
  }

  onLevelLessClick(){

    const characteristicsValues = (this.characterForm.controls.characteristics as FormArray).controls.map(control => control.value.value)

    if(characteristicsValues.some(char => char!=10)){

      const confirmChange = confirm("réduire le niveau ? (ceci réinitialisera les caractéristiques du personnage)")

      if(confirmChange){

        this.characterForm.controls.level.setValue(this.characterForm.controls.level.value-1)
        this.resetCharacteristicsDefault()
        
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

  onCharactLessClick(index:number){

    const characteristic = (this.characterForm.get('characteristics.'+ index.toString()) as FormGroup).controls
    characteristic.value.setValue(this.getControllerValue(`characteristics.${index}.value`)-1)
    characteristic.bonus.setValue(this.getCharactBonus(characteristic.value.value))

  }

  onCharactPlusClick(index:number){

    const characteristic = (this.characterForm.get('characteristics.'+ index.toString()) as FormGroup).controls
    characteristic.value.setValue(this.getControllerValue(`characteristics.${index}.value`)+1)
    characteristic.bonus.setValue(this.getCharactBonus(characteristic.value.value))

  }

  private resetCharacteristicsDefault(){

      const characteristics = this.characterForm.controls.characteristics as FormArray

      characteristics.controls.forEach(control => {

        control.get('value').setValue(10)
        control.get('bonus').setValue(0)

      })

  }

  private getCharactBonus(value:number){

    return Math.floor((value-10)/2)

  }

  private getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
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

  getCharactAsArray(){

    return (this.characterForm.get('characteristics') as FormArray).controls

  }

}
