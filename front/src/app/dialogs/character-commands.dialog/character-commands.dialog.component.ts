import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';


export interface CharacterCommandsDialogData {

  character:Character

}

@Component({
  selector: 'characterCommandsDialog',
  templateUrl: './character-commands.dialog.component.html',
  styleUrls: ['./character-commands.dialog.component.scss']
})
export class CharacterCommandsDialog implements OnInit {

  character:Character

  constructor(
    public dialogRef: MatDialogRef<CharacterCommandsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: CharacterCommandsDialogData
    ) {

      this.character = data.character

     }

  ngOnInit(): void {
  }

}
