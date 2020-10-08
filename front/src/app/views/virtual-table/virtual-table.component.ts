import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Team } from 'src/app/models/team';
import { User } from 'src/app/models/user';
import { CharactersService } from 'src/app/services/characters.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-virtual-table',
  templateUrl: './virtual-table.component.html',
  styleUrls: ['./virtual-table.component.scss']
})
export class VirtualTableComponent implements OnInit {

  currentUser:User

  displaySide:boolean = false;
  displayHeader:boolean = false;
  displayOptions:boolean = false;

  displayCharacterDetails:boolean = false;
  displaySound:boolean = false;
  displayBackgroundSettings:boolean = false;
  displayDices:boolean = false;
  displayMap:boolean = false;
  displaySettings:boolean = false;

  selectedCharacter:Character;

  userCharacters:Character[]=[];
  teams:Team[];
  heroes:Team;

  constructor(
    private charactService:CharactersService,
    private usersService:UsersService
    ){

      this.teams = this.charactService.getTeams();
      this.heroes = this.charactService.getHeroes();
       

  }

  ngOnInit(){

    this.loadComponent()

  }

  loadComponent(){

    this.usersService.getCurrentUser().subscribe(userFound =>{
        
      this.currentUser = userFound
      console.log(userFound)
    })
    this.teams.forEach(team => {
      team.getUniqueMembers().forEach(member => this.userCharacters.push(member))
    })

    this.selectedCharacter={

      id:0,
      name:"Nom de personnage",
      portrait:"https://img.freepik.com/vecteurs-libre/dragon-silhouette_23-2147510587.jpg?size=338&ext=jpg"

    }

  }

  onCharacterSelected(character:Character){

    this.selectedCharacter = character;

  }

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
    showHideOptions(){

      this.displayOptions = !this.displayOptions

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

    logoutUser(){

      sessionStorage.removeItem("currentUser")
      console.log(sessionStorage)
      alert("vous vous êtes déconnecté")
      this.loadComponent()

    }
}
