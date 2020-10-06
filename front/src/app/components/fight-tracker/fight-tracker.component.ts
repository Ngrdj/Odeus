import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'fight-tracker',
  templateUrl: './fight-tracker.component.html',
  styleUrls: ['./fight-tracker.component.scss']
})
export class FightTrackerComponent implements OnInit {

  visibility:boolean=false;
  @Input() fighterList:Character[]
  selectedCharacter:Character

  constructor() { }

  ngOnInit(): void {
  }

  onShowHideButtonClick(){

    this.visibility = !this.visibility

  }

}
