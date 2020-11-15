import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faRunning, faSort, faPlay  } from '@fortawesome/free-solid-svg-icons';
import { BehaviorEnum } from 'src/app/models/enums/behavior.enum';
import { Fighter } from 'src/app/models/fighter';

@Component({
  selector: 'fight-tracker',
  templateUrl: './fight-tracker.component.html',
  styleUrls: ['./fight-tracker.component.scss']
})
export class FightTrackerComponent implements OnInit, OnChanges {

  @Input("open")
  visibility:boolean=false;

  @Input() fighterList:Fighter[]=[];
  selectedFighter:Fighter;
  enemyList:Fighter[]=[];
  allyList:Fighter[]=[];
  public round:number=0;

  @Output() removeFighter:EventEmitter<any> = new EventEmitter();
  @Output() open:EventEmitter<any> = new EventEmitter();
  @Output() close:EventEmitter<any> = new EventEmitter();


  faRunning=faRunning;
  faSort=faSort;
  faPlay=faPlay;

  constructor() { 
    this.round=0
  }

  ngOnInit(): void {
    this.selectedFighter.portrait="https://img.freepik.com/vecteurs-libre/dragon-silhouette_23-2147510587.jpg?size=338&ext=jpg";


  }
  ngOnChanges(changes:SimpleChanges):void{

    if(changes.fighterList){


      const fighterList = changes.fighterList.currentValue

      const allyList= [];
      const enemyList = [];

      fighterList.forEach(fighter => {

        if(fighter.behavior === BehaviorEnum.ALLY){

          allyList.push(fighter)

        }else{

          enemyList.push(fighter)
          
        }

      })

      this.allyList = allyList;
      this.enemyList = enemyList;

    }

  }

  onRemoveFighter(fighter:Fighter){

    this.removeFighter.emit(fighter)

  }

  onShowHideButtonClick(){

    if(this.visibility){
      this.close.emit()
    }else{
      this.open.emit()
    }

  }
  setAllInitiatives(){

    this.fighterList.forEach(fighter =>{

      fighter.initiative = this.randomNumber(1,20)

    })

  }

  sortCharacterByInitClick(){

    this.enemyList.sort((a:Fighter,b:Fighter)=>b.initiative-a.initiative);
    this.allyList.sort((a:Fighter,b:Fighter)=>b.initiative-a.initiative);
  }

  randomNumber(min, max) {  
    return Math.round(Math.random() * (max - min) + min) ; 
  }  

  roundCountClick(){

    let sortFighterList=this.fighterList.sort((a:Fighter,b:Fighter)=>b.initiative-a.initiative)

    if(!this.selectedFighter){
    this.selectedFighter=sortFighterList[0];
    }else{
    this.selectedFighter=sortFighterList[sortFighterList.indexOf(this.selectedFighter)+1]
    }

      
    if(this.selectedFighter===sortFighterList[sortFighterList.length]){
      this.round+=1;
      this.selectedFighter=sortFighterList[0];
    }
  }

  resetRoundClick(){
    this.selectedFighter=undefined;
    this.round=0;
  }
}
