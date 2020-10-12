import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.scss']
})
export class RaceFormComponent implements OnInit {

  raceForm:FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(){

    console.log("submitForm")

  }

}
