import { Component, Input, OnInit } from '@angular/core';
import { Ally } from 'src/app/models/ally';
import { Bonus } from 'src/app/models/bonus';
import { Context } from 'src/app/models/context';
import { Enemy } from 'src/app/models/enemy';
import { Init } from 'src/app/models/init';
import { Twist } from 'src/app/models/twist';

@Component({
  selector: 'random-scenario.dialog',
  templateUrl: './random-scenario.dialog.component.html',
  styleUrls: ['./random-scenario.dialog.component.scss']
})
export class RandomScenarioDialogComponent implements OnInit {

  @Input() init:Init[]=[];
  @Input() context:Context[]=[];
  @Input() enemy:Enemy[]=[];
  @Input() ally:Ally[]=[];
  @Input() bonus:Bonus[]=[];
  @Input() twist:Twist[]=[];



  constructor() { }

  ngOnInit(): void {
  }

  randomScenario(name:string){

    switch(name){
      case 'init': return this.init[Math.floor(Math.random() * this.init.length)];
      break;

      case 'context': return this.context[Math.floor(Math.random() * this.context.length)];
      break;

      case 'enemy': return this.enemy[Math.floor(Math.random() * this.enemy.length)];
      break;

      case 'ally': return this.ally[Math.floor(Math.random() * this.ally.length)];
      break;

      case 'bonus': return this.bonus[Math.floor(Math.random() * this.bonus.length)];
      break;

      case 'twist': return this.twist[Math.floor(Math.random() * this.twist.length)];
      break;
    }
  }

}
