import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  faSearch=faSearch;

  @Output()optionsButtonClick:EventEmitter<any>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onLogoutClick(){

    sessionStorage.removeItem("currentUser")
    console.log(sessionStorage)

  }
  onOptionsButtonClick(){

    this.optionsButtonClick.emit()

  }

}
