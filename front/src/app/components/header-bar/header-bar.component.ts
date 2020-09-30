import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  @Output()optionsButtonClick:EventEmitter<any>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onLogoutClick(){

    localStorage.removeItem("currentUser")
    console.log(localStorage)

  }
  onOptionsButtonClick(){

    this.optionsButtonClick.emit()

  }

}
