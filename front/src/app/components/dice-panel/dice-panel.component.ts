import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dice-panel',
  templateUrl: './dice-panel.component.html',
  styleUrls: ['./dice-panel.component.scss']
})
export class DicePanelComponent implements OnInit {

  dices:number[]=[4,6,8,10,12,20,100];

  public diceResult:number=1;
  public diceValue:number=20;

  constructor() { }

  ngOnInit() {
  }

  lancerDe(value:number){
    
    this.diceResult=this.randomNumber(1,value);

  }

  randomNumber(min, max) {  
    return Math.round(Math.random() * (max - min) + min) ; 
  }

}
