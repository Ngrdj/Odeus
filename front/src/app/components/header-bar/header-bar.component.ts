import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  @Input() currentUser:User;
  faSearch=faSearch;

  @Output()optionsButtonClick:EventEmitter<any>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onLogoutClick(){

    sessionStorage.removeItem("currentUser")
    console.log(sessionStorage)
    alert("vous vous êtes déconnecté")

  }
  onOptionsButtonClick(){

    this.optionsButtonClick.emit()

  }

}
