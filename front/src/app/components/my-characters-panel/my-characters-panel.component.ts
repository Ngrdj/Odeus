import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCharacterComponent } from 'src/app/dialogs/create-character.dialog/create-character.dialog.component';

@Component({
  selector: 'my-characters-panel',
  templateUrl: './my-characters-panel.component.html',
  styleUrls: ['./my-characters-panel.component.scss']
})
export class MyCharactersPanelComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onNewCharacterButtonClick(){

    this.dialog.open(CreateCharacterComponent)

  }

}
