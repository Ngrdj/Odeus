import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.scss']
})
export class TeamManagerComponent implements OnInit {

  @Output() showHideClick:EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onShowHideClick(){

    this.showHideClick.emit()

  }

}
