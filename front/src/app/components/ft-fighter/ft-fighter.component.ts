import { Component, Input, OnInit } from '@angular/core';
import { Fighter } from 'src/app/models/fighter';

@Component({
  selector: 'ft-fighter',
  templateUrl: './ft-fighter.component.html',
  styleUrls: ['./ft-fighter.component.scss']
})
export class FtFighterComponent implements OnInit {

@Input() fighter:Fighter;

  constructor() { }

  ngOnInit(): void {
  }

}
