import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  public characteristicForm:FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(){

    console.log("submitForm")

  }

}
