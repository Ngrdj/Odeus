import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCharacterComponent } from 'src/app/dialogs/create-character.dialog/create-character.dialog.component';
import { Characteristic } from 'src/app/models/characteristic';
import { Class } from 'src/app/models/class';
import { Race } from 'src/app/models/race';
import { Skill } from 'src/app/models/skill';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'my-characters-panel',
  templateUrl: './my-characters-panel.component.html',
  styleUrls: ['./my-characters-panel.component.scss']
})
export class MyCharactersPanelComponent implements OnInit {

 @Input() characteristics:Characteristic[];
 @Input() classes:Class[];
 @Input() races:Race[];
 @Input() skills:Skill[];
 @Input() stories:Story[];


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNewCharacterButtonClick(){

    this.dialog.open(CreateCharacterComponent,{

      data:{

        characteristics:this.characteristics,
        classes:this.classes,
        races:this.races,
        skills:this.skills,
        stories:this.stories,

      }

    })

  }

}
