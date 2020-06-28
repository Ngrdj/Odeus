import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fight-tracker',
  templateUrl: './fight-tracker.component.html',
  styleUrls: ['./fight-tracker.component.css']
})
export class FightTrackerComponent implements OnInit {

  private visible:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  toggleVisibility(){

    if(this.visible){

      this.visible = false;

    }else{

      this.visible = true;

    }
  }
  getVisibility(){

    return this.visible

  }
}
