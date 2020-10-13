import { Component, OnInit } from '@angular/core';
import { Capacity } from 'src/app/models/capacity';
import { Character } from 'src/app/models/character';
import { Characteristic } from 'src/app/models/characteristic';
import { Class } from 'src/app/models/class';
import { Behavior } from 'src/app/models/enums/behavior.enum';
import { Fighter } from 'src/app/models/fighter';
import { Race } from 'src/app/models/race';
import { Skill } from 'src/app/models/skill';
import { Story } from 'src/app/models/story';
import { SubClass } from 'src/app/models/subClass';
import { Team } from 'src/app/models/team';
import { User } from 'src/app/models/user';
import { AppDataService } from 'src/app/services/app-data.service';
import { AuthentificationsService } from 'src/app/services/authentifications.service';
import { CharactersService } from 'src/app/services/characters.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-virtual-table',
  templateUrl: './virtual-table.component.html',
  styleUrls: ['./virtual-table.component.scss']
})
export class VirtualTableComponent implements OnInit {

  currentUser:User

  background:string="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1558559745443-KM38DVM6H0AIJWVJNT1H/ke17ZwdGBToddI8pDm48kJe8VwonRcYgr7f_0UVbdhh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbHrcextDeErdIU23wx0_6BTOY9zQNi_nItQjMEsHFYhlvkRmRO1_mFZFNCn67QdSw/ghosts_saltmarsh.jpg?format=2500w";
  
  capacities:Capacity[];
  characteristics:Characteristic[];
  classes:Class[];
  pnjList;
  races:Race[];
  skills:Skill[];
  stories:Story[];
  subClasses:SubClass[];

  displaySide:boolean = false;
  displayHeader:boolean = false;
  displayOptions:boolean = false;
  displayMyCharacters:boolean = false;
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

  fighterList:Fighter[]=[];

  constructor(
    private authService:AuthentificationsService,
    private dataService:AppDataService,
    private charactService:CharactersService,
    private usersService:UsersService,
    ){

      this.teams = this.charactService.getTeams();
      this.heroes = this.charactService.getHeroes();
      
      this.heroes.members.forEach(member =>{ 
        
        const newFighter = Fighter.fromCharacter(member);
        newFighter.behavior = Behavior.ALLY
        this.fighterList.push(newFighter)
      
      })
      this.teams[0].members.forEach(member =>{ 
        
        const newFighter = Fighter.fromCharacter(member);
        newFighter.behavior = Behavior.ENEMY
        this.fighterList.push(newFighter)
      
      })

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

    this.setAllData()

  }

  setAllData(){

    this.dataService.setAllDatas().subscribe(value => {
      
      console.log(value)
      this.capacities = this.dataService.capacities;
      this.characteristics = this.dataService.characteristics;
      this.classes = this.dataService.classes;
      this.pnjList = this.dataService.pnjList;
      this.races = this.dataService.races;
      this.skills = this.dataService.skills;
      this.stories = this.dataService.stories;
      this.subClasses = this.dataService.subClasses;

    })
    

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
    loginUser(){


    }
    onChangeBackground(newBackground:string){

      this.background = newBackground
      console.log(this.background)

    }
}
