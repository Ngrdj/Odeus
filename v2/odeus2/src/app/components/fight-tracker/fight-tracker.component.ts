import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';


@Component({
  selector: 'app-fight-tracker',
  templateUrl: './fight-tracker.component.html',
  styleUrls: ['./fight-tracker.component.css']
})
export class FightTrackerComponent implements OnInit {

  fighterList : Character [] = [];

  private visible:boolean = true;

    constructor() {}

  ngOnInit(): void {

    
  }

  toggleVisibility():void{

    if(this.visible){

      this.visible = false;

    }else{

      this.visible = true;

    }
  }

  getVisibility():boolean{

    return this.visible

  }

  addFighter(newFighter : Character){



  }
  deleteFighter(fighter : Character){

    this.fighterList = this.fighterList.filter(element => element != fighter);
    console.log(this.fighterList)
  }

}
