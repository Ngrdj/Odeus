import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dice-panel',
  templateUrl: './dice-panel.component.html',
  styleUrls: ['./dice-panel.component.scss']
})
export class DicePanelComponent implements OnInit {

  public diceResult:number=1;
  public diceValue:number=20;

  constructor() { }

  ngOnInit() {
  }

  lancerDe(value:string){
    
    this.diceResult=this.randomNumber(1,parseInt(value));

  }

randomNumber(min, max) {  
    return Math.round(Math.random() * (max - min) + min) ; 
  }

}
