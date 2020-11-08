import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Characteristic } from 'src/app/models/characteristic';
import { Pj } from 'src/app/models/pj';
import { Pnj } from 'src/app/models/pnj';

@Component({
  selector: 'character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit,OnChanges {

  @Input() character:Character;
  @Input() characteristics:Characteristic[];
  constructor() {
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    console.log(this.character)
  }

}
