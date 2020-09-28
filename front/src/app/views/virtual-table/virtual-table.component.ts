import { Component, OnInit } from '@angular/core';
import { AuthentificationsService } from 'src/app/services/authentifications.service';

@Component({
  selector: 'app-virtual-table',
  templateUrl: './virtual-table.component.html',
  styleUrls: ['./virtual-table.component.scss']
})
export class VirtualTableComponent implements OnInit {
  displaySide:boolean = true;
  displayHeader:boolean = true;

  constructor(authService:AuthentificationsService){

    console.log(localStorage)
    authService.addUser("currentUser",{name:"coucou"})


  }

  ngOnInit(){}

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
