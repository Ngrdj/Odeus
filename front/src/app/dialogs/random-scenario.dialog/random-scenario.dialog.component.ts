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

  currentInit:Init;
  currentContext:Context;
  currentEnemy:Enemy;
  currentAlly:Ally;
  currentBonus:Bonus;
  currentTwist:Twist;



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
      case 'init': this.currentInit=this.init[this.randomNumber(0,this.init.length-1)];
      break;

      case 'context': this.currentContext=this.context[this.randomNumber(0,this.context.length-1)];
      break;

      case 'enemy': this.currentEnemy=this.enemy[this.randomNumber(0,this.enemy.length-1)];
      break;

      case 'ally': this.currentAlly=this.ally[this.randomNumber(0,this.ally.length-1)];
      break;

      case 'bonus': this.currentBonus=this.bonus[this.randomNumber(0,this.bonus.length-1)];
      break;

      case 'twist': this.currentTwist=this.twist[this.randomNumber(0,this.twist.length-1)];
      break;
    }
  }

  randomNumber(min, max) {  
    return Math.round(Math.random() * (max - min) + min) ; 
  }

}
