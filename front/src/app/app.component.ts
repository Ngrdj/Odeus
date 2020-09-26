import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  displaySide:boolean;
  displayHeader:boolean;

  showHideSide(){

    this.displaySide = !this.displaySide
    console.log(this.displaySide)

  }
  showHideHeader(){

    this.displayHeader = !this.displayHeader
    console.log(this.displayHeader)

  }

}
