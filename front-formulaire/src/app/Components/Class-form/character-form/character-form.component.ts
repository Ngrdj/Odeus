import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {

  characterForm:FormGroup;

  constructor() { }

  ngOnInit() {
  }
  onSubmitForm(){

    console.log("submitForm")

  }

}
