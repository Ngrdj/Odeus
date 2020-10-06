import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Class-form',
  templateUrl: './Class-form.component.html',
  styleUrls: ['./Class-form.component.scss']
})
export class ClassFormComponent implements OnInit {

public classCharacterForm:FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(){

    console.log("submitForm")

  }

}
