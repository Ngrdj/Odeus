import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { CharacterCommandEnum, CharacterCommandsDialog } from 'src/app/dialogs/character-commands.dialog/character-commands.dialog.component';
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

  @Output() details:EventEmitter<Character> = new EventEmitter()
  @Output() addToAllies:EventEmitter<Character> = new EventEmitter()
  @Output() addToEnnemies:EventEmitter<Character> = new EventEmitter()


  @Input() quantity:number;
  

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCommandsDialog(){

    this.dialog.open(CharacterCommandsDialog,{})
    .afterClosed()
    .subscribe(command => {

      switch(command){

        case CharacterCommandEnum.DETAILS:
          this.details.emit(this.character)
        break;
        case CharacterCommandEnum.ADDTOALLIES:
          this.addToAllies.emit(this.character)
        break;
        case CharacterCommandEnum.ADDTOENNEMIES:
          this.addToEnnemies.emit(this.character)
        break;

      }

    })

  }

  onEyeClick(event:Event){

    event.stopPropagation()
    this.details.emit(this.character)


  }

}
