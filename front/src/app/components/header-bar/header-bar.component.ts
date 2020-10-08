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
  @Output()loginClick:EventEmitter<any>=new EventEmitter()
  @Output()logoutClick:EventEmitter<any>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onLogoutClick(){

    this.logoutClick.emit()

  }
  onLoginClick(){

    this.loginClick.emit()

  }
  onOptionsButtonClick(){

    this.optionsButtonClick.emit()

  }

}
