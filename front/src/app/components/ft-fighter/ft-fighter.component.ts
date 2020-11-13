import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fighter } from 'src/app/models/fighter';

@Component({
  selector: 'ft-fighter',
  templateUrl: './ft-fighter.component.html',
  styleUrls: ['./ft-fighter.component.scss']
})
export class FtFighterComponent implements OnInit {

@Input() fighter:Fighter;
@Input() orientation:string;

@Output() removeFighter:EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClick(fighter?:Fighter){

    let removeConfirm = confirm(`Retirer ${fighter?"\""+fighter.name+"\"":'le personnage'} de la liste ?`)

    if(removeConfirm){

      this.removeFighter.emit()

    }

  }

}
