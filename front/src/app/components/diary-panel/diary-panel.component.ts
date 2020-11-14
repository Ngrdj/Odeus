import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RandomScenarioDialogComponent } from 'src/app/dialogs/random-scenario.dialog/random-scenario.dialog/random-scenario.dialog.component';

@Component({
  selector: 'diary-panel',
  templateUrl: './diary-panel.component.html',
  styleUrls: ['./diary-panel.component.scss']
})
export class DiaryPanelComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openRandomScenarioDialog(){
    return this.dialog.open(RandomScenarioDialogComponent, {
      height: '75%',
      width: '50%',
      panelClass:'panelDialog',
    })
  }
}
