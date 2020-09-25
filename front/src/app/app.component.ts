import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  displaySide:boolean;


  showHideSide(){

    this.displaySide = !this.displaySide
    console.log(this.displaySide)

  }

}
