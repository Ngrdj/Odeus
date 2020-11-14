import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RandomScenarioDialogComponent } from 'src/app/dialogs/random-scenario.dialog/random-scenario.dialog/random-scenario.dialog.component';
import { Ally } from 'src/app/models/ally';
import { Bonus } from 'src/app/models/bonus';
import { Context } from 'src/app/models/context';
import { Enemy } from 'src/app/models/enemy';
import { Init } from 'src/app/models/init';
import { Twist } from 'src/app/models/twist';

@Component({
  selector: 'diary-panel',
  templateUrl: './diary-panel.component.html',
  styleUrls: ['./diary-panel.component.scss']
})
export class DiaryPanelComponent implements OnInit {

  @Input() init:Init[]=[];
  @Input() context:Context[]=[];
  @Input() enemy:Enemy[]=[];
  @Input() ally:Ally[]=[];
  @Input() bonus:Bonus[]=[];
  @Input() twist:Twist[]=[];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openRandomScenarioDialog(){
    return this.dialog.open(RandomScenarioDialogComponent, {
      height: '75%',
      width: '50%',
      panelClass:'panelDialog',
      data:{
        init:this.init,
        context:this.context,
        enemy:this.enemy,
        ally:this.ally,
        bonus:this.bonus,
        twist:this.twist

      }
    }).afterClosed()
  }
}
