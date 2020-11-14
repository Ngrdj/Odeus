import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ally } from 'src/app/models/ally';
import { Bonus } from 'src/app/models/bonus';
import { Context } from 'src/app/models/context';
import { Enemy } from 'src/app/models/enemy';
import { Init } from 'src/app/models/init';
import { Twist } from 'src/app/models/twist';

export interface DialogScenarioData{
  init:Init[];
  context:Context[];
  enemy:Enemy[];
  ally:Ally[];
  bonus:Bonus[];
  twist:Twist[];
}
@Component({
  selector: 'random-scenario.dialog',
  templateUrl: './random-scenario.dialog.component.html',
  styleUrls: ['./random-scenario.dialog.component.scss']
})
export class RandomScenarioDialogComponent implements OnInit {

  init:Init[]=[];
  context:Context[]=[];
  enemy:Enemy[]=[];
  ally:Ally[]=[];
  bonus:Bonus[]=[];
  twist:Twist[]=[];



  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogScenarioData) {
    this.init=data.init;
    this.context=data.context;
    this.enemy=data.enemy;
    this.ally=data.enemy;
    this.bonus=data.bonus;
    this.twist=data.twist;
   }

  ngOnInit(): void {
    
  }

  randomScenario(name:string){

    switch(name){
      case 'init': this.init[Math.floor(Math.random() * this.init.length)];
      break;

      case 'context': this.context[Math.floor(Math.random() * this.context.length)];
      break;

      case 'enemy': this.enemy[Math.floor(Math.random() * this.enemy.length)];
      break;

      case 'ally': this.ally[Math.floor(Math.random() * this.ally.length)];
      break;

      case 'bonus': this.bonus[Math.floor(Math.random() * this.bonus.length)];
      break;

      case 'twist': this.twist[Math.floor(Math.random() * this.twist.length)];
      break;
    }
  }

}
