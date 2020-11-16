import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'settings-panel',
  templateUrl: './settings-panel.component.html',
  styleUrls: ['./settings-panel.component.scss']
})
export class SettingsPanelComponent implements OnInit {

  @Input() currentUser:User
  
  optionDisplayed:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
