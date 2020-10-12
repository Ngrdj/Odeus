import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() character:Character;
  statsArray:string[]=["Force","Dextérité","Intelligence","Charisme"]

  constructor() {

  }

  ngOnInit(): void {
  }

}
