import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCharacterComponent } from 'src/app/dialogs/create-character.dialog/create-character.dialog.component';
import { Character } from 'src/app/models/character';
import { Characteristic } from 'src/app/models/characteristic';
import { Class } from 'src/app/models/class';
import { Pj } from 'src/app/models/pj';
import { Race } from 'src/app/models/race';
import { Skill } from 'src/app/models/skill';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'my-characters-panel',
  templateUrl: './my-characters-panel.component.html',
  styleUrls: ['./my-characters-panel.component.scss']
})
export class MyCharactersPanelComponent implements OnInit {

  @Input() userCharacters:Pj[];

  @Input() characteristics:Characteristic[];
  @Input() classes:Class[];
  @Input() races:Race[];
  @Input() skills:Skill[];
  @Input() stories:Story[];

  @Output() characterDetails:EventEmitter<Character> = new EventEmitter()
  @Output() addCharacterToAllies:EventEmitter<Character> = new EventEmitter()
  @Output() addCharacterToEnnemies:EventEmitter<Character> = new EventEmitter()
  @Output() createNewPj:EventEmitter<Pj> = new EventEmitter()


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNewCharacterButtonClick(){

    this.dialog.open(CreateCharacterComponent,{

      width:"50%",
      height:"80%",
      data:{

        characteristics:this.characteristics,
        classes:this.classes,
        races:this.races,
        skills:this.skills,
        stories:this.stories,

      }

    })
    .afterClosed()
    .subscribe(newPj => {

      if(newPj){

        this.createNewPj.emit(newPj)

      }

    })

  }

  watchCharacterDetails(character:Character){

    this.characterDetails.emit(character)

  }
  addToAllies(character:Character){

      this.addCharacterToAllies.emit(character)

  }
  addToEnnemies(character:Character){

    this.addCharacterToEnnemies.emit(character)

  }

}
