import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Characteristic } from 'src/app/models/characteristic';

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  @Input() character:Character;
  @Input() characteristics:Characteristic[];
  constructor() {

  }

  ngOnInit(): void {
  }

}
