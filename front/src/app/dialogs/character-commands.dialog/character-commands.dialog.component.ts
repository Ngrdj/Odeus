import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export enum CharacterCommandEnum{

  DETAILS="DETAILS",
  ADDTOALLIES="ADDTOALLIES",
  ADDTOENNEMIES="ADDTOENNEMIES"

}

@Component({
  selector: 'characterCommandsDialog',
  templateUrl: './character-commands.dialog.component.html',
  styleUrls: ['./character-commands.dialog.component.scss']
})
export class CharacterCommandsDialog implements OnInit {

  characterCommandEnum = CharacterCommandEnum;
  characterCommandEnumValues = Object.values(this.characterCommandEnum)

  constructor(
    public dialogRef: MatDialogRef<CharacterCommandsDialog>,
    ) {}

  ngOnInit(): void {
  }


  throwCommand(command:CharacterCommandEnum){

    this.dialogRef.close(command)

  }

}
