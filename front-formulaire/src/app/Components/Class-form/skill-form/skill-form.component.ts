import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit {

  skillForm:FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(){

    console.log("submitForm")

  }

}
