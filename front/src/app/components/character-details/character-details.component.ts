import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

statsArray:string[]=["Force","Dextérité","Intelligence","Charisme"]

  constructor() {

  }

  ngOnInit(): void {
  }

}
