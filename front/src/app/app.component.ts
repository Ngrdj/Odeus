import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  displaySide:boolean = true;
  displayHeader:boolean = true;


  showHideSide(){
    if(this.displaySide){

      this.onHideSide()

    }else{

      this.onShowSide()

    }

    this.displaySide = !this.displaySide


  }
  showHideHeader(){
    if(this.displayHeader){

      this.onHideHeader()

    }else{

      this.onShowHeader()

    }

    this.displayHeader = !this.displayHeader
  

  }

  private onHideSide(){
    
    console.log("hiding side")

  }
  private onShowSide(){

    console.log("showing side")

  }
  private onHideHeader(){

    console.log("hiding header")

  }
  private onShowHeader(){

    console.log("showing header")

  }

}
