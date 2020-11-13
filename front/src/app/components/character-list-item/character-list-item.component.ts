import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { CharacterCommandsDialog } from 'src/app/dialogs/character-commands.dialog/character-commands.dialog.component';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.scss']
})
export class CharacterListItemComponent implements OnInit {

  faEye = faEye;

  @HostListener('click') onClick() {
    
 
    this.openCommandsDialog()
  
  }

  @Input() character:Character;
  @Output() eyeClick:EventEmitter<any> = new EventEmitter()

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCommandsDialog(){

    this.dialog.open(CharacterCommandsDialog,{


      data:{

        character:this.character

      }

    })

  }

  onEyeClick(event:Event){

    event.stopPropagation()
    this.eyeClick.emit()


  }

}
