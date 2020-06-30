import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.css']
})
export class FighterComponent implements OnInit {

  @Input() fighter:Character;
  @Output() deleteFighter : EventEmitter<Character>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  onDeleteClick(element : Character){

    /*element.remove()*/
      this.deleteFighter.emit(element);
  
  }

}
