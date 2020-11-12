import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  constructor(translate:TranslateService) {
    translate.setDefaultLang('fr');
      translate.use('fr');
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
  }

}
