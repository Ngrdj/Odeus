import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Ally } from 'src/app/models/ally';
import { Bonus } from 'src/app/models/bonus';
import { Character } from 'src/app/models/character';
import { Characteristic } from 'src/app/models/characteristic';
import { Class } from 'src/app/models/class';
import { Context } from 'src/app/models/context';
import { Enemy } from 'src/app/models/enemy';
import { BehaviorEnum } from 'src/app/models/enums/behavior.enum';
import { Fighter } from 'src/app/models/fighter';
import { Init } from 'src/app/models/init';
import { Pj } from 'src/app/models/pj';
import { Pnj } from 'src/app/models/pnj';
import { Race } from 'src/app/models/race';
import { Skill } from 'src/app/models/skill';
import { Story } from 'src/app/models/story';
import { Team } from 'src/app/models/team';
import { Twist } from 'src/app/models/twist';
import { User } from 'src/app/models/user';
import { AppDataService } from 'src/app/services/app-data.service';
import { AuthentificationsService } from 'src/app/services/authentifications.service';
import { CharactersService } from 'src/app/services/characters.service';
import { GoogleService } from 'src/app/services/google.service';
import { ScenarioService } from 'src/app/services/scenario.service';
import { TeamsService } from 'src/app/services/teams.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-virtual-table',
  templateUrl: './virtual-table.component.html',
  styleUrls: ['./virtual-table.component.scss']
})
export class VirtualTableComponent implements OnInit {

  currentUser:User

  behaviorEnum = BehaviorEnum;

  background:string="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1558559745443-KM38DVM6H0AIJWVJNT1H/ke17ZwdGBToddI8pDm48kJe8VwonRcYgr7f_0UVbdhh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbHrcextDeErdIU23wx0_6BTOY9zQNi_nItQjMEsHFYhlvkRmRO1_mFZFNCn67QdSw/ghosts_saltmarsh.jpg?format=2500w";
  
  characteristics:Characteristic[]=[];
  classes:Class[]=[];
  pnjList:Pnj[]=[];
  races:Race[]=[];
  skills:Skill[]=[];
  stories:Story[]=[];

  init:Init[]=[];
  context:Context[]=[];
  enemy:Enemy[]=[];
  ally:Ally[]=[];
  bonus:Bonus[]=[];
  twist:Twist[]=[];

  displaySide:boolean = false;
  displayHeader:boolean = false;
  displayOptions:boolean = false;

  showFightTracker:boolean = false;
  
  displayMyCharacters:boolean = false;
  displayCharacterDetails:boolean = false;
  displaySound:boolean = false;
  displayBackgroundSettings:boolean = false;
  displayDices:boolean = false;
  displayMap:boolean = false;
  displaySettings:boolean = false;
  displayDiary:boolean = false;


  selectedCharacter:Character;

  userPlaylist;

  userCharacters:Character[]=[];
  teams:Team[]=[];
  heroes:Team;

  fighterList:Fighter[]=[];

  constructor(
    private authService:AuthentificationsService,
    private dataService:AppDataService,
    private charactService:CharactersService,
    private teamService:TeamsService,
    private usersService:UsersService,
    private googleService:GoogleService,
    private scenarioService:ScenarioService
    ){
  }

  ngOnInit(){

    this.loadComponent()

  }

  loadComponent(){

    this.usersService.getCurrentUser().subscribe(userFound =>{
        
      this.currentUser = userFound
    })

    this.setAllBasicData()

    if(this.authService.userLogged()){

      this.setAllUserData()

    }

    //this.loadPlaylist()
    
    this.heroes = new Team("Heroes",[])
    this.setScenarioArray();


  }

  setAllBasicData(){

    this.dataService.setAllDatas().subscribe(value => {

      this.characteristics = this.dataService.characteristics;
      this.classes = this.dataService.classes;
      this.pnjList = this.dataService.pnjList;
      this.races = this.dataService.races;
      this.skills = this.dataService.skills;
      this.stories = this.dataService.stories;

      //temp fighter
      this.pnjList.forEach(pnj => {

        this.fighterList = [...this.fighterList,new Fighter(pnj,BehaviorEnum.ALLY),new Fighter(pnj,BehaviorEnum.ENEMY)]

      })
     
    })
    

  }

  setAllUserData(){


      forkJoin([

        this.charactService.getCharactersByUser(),
        this.teamService.getTeamsByUser()

      ]).subscribe(join => {

        this.userCharacters = join[0];
        this.teams = join[1];

      } )


    const pjTeam:Character[]=[];

    this.userCharacters.forEach((character)=>{

      pjTeam.push(character);
      
    })
  }

  onCharacterSelected(character:Character){

      this.selectedCharacter = character;

  }

  onRemoveFighter(fighterToRemove:Fighter){

    this.fighterList = this.fighterList.filter(fighter => fighter !== fighterToRemove)
    this.openFightTracker()

  }

  createNewPj(pj:Pj){

    this.charactService.createPj(pj).subscribe(value => {

      console.log(value)

    })

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

  openFightTracker(){

    this.showFightTracker = true;

  }

  closeFightTracker(){

    this.showFightTracker = false;

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

  addCharacterToFighterList(character:Character,behavior:BehaviorEnum){

    const fighterListCopy = [...this.fighterList]
    fighterListCopy.push(new Fighter(

      character,
      behavior,
      0

    ))
    this.fighterList = fighterListCopy;
    this.openFightTracker()

  }

  watchCharacterDetails(character:Character){

    //if(character instanceof Pj){...}else{'open bestiary'}
    this.selectedCharacter = character

    if(!this.displayCharacterDetails){

      this.displayCharacterDetails = !this.displayCharacterDetails;

    }

  }

  loadPlaylist(){
    this.googleService.loadPlaylist().subscribe((value)=>console.log(value))
  }

  setScenarioArray(){
    this.scenarioService.getAllInitScenario().subscribe((init)=>this.init=init);
    this.scenarioService.getAllContextScenario().subscribe((context)=>this.context=context);
    this.scenarioService.getAllEnemyScenario().subscribe((enemy)=>this.enemy=enemy);
    this.scenarioService.getAllAllyScenario().subscribe((ally)=>this.ally=ally);
    this.scenarioService.getAllBonusScenario().subscribe((bonus)=>this.bonus=bonus);
    this.scenarioService.getAllTwistScenario().subscribe((twist)=>this.twist=twist);

  }
}
