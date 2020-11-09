import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { Fighter } from 'src/app/models/fighter';

@Component({
  selector: 'fight-tracker',
  templateUrl: './fight-tracker.component.html',
  styleUrls: ['./fight-tracker.component.scss']
})
export class FightTrackerComponent implements OnInit, OnChanges {

  visibility:boolean=false;
  @Input() fighterList:Fighter[]=[];
  selectedFighter:Fighter;
  enemyList:Fighter[]=[];
  allyList:Fighter[]=[];

  faRunning=faRunning;

  constructor() { }

  ngOnInit(): void {



  }
  ngOnChanges(changes:SimpleChanges):void{

    console.log(changes)
    if(this.fighterList && changes.fighterList){

      const allyList= [];
      const enemyList = [];

      changes.fighterList.currentValue.forEach(fighter =>{

        if(fighter.behavior === "ALLY"){

          allyList.push(fighter)

        }else{

          enemyList.push(fighter)

        }

      })
      this.allyList = allyList;
      this.enemyList = enemyList;
      console.log(this.allyList,this.enemyList)

    }

  }

  onShowHideButtonClick(){

    this.visibility = !this.visibility

  }
  setAllInitiatives(){

    this.fighterList.forEach(fighter =>{

      fighter.initiative = this.randomNumber(1,20)

    })

  }
  randomNumber(min, max) {  
    return Math.round(Math.random() * (max - min) + min) ; 
  }  
}
