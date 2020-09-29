import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'options-bar',
  templateUrl: './options-bar.component.html',
  styleUrls: ['./options-bar.component.scss']
})
export class OptionsBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogoutClick(){

    localStorage.removeItem("currentUser")
    console.log(localStorage)

  }

}
