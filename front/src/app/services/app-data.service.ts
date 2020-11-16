import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Capacity } from '../models/capacity';
import { Characteristic } from '../models/characteristic';
import { Class } from '../models/class';
import { GetCapacityDto } from '../models/dtos/capacity/get-capacity.dto';
import { GetCharacteristicDto } from '../models/dtos/characteristic/get-characteristic.dto';
import { GetClassDto } from '../models/dtos/class/get-class.dto';
import { GetPnjDto } from '../models/dtos/pnj/get-pnj.dto';
import { GetRaceDto } from '../models/dtos/race/get-race.dto';
import { GetSkillDto } from '../models/dtos/skill/get-skill.dto';
import { GetStoryDto } from '../models/dtos/story/get-story.dto';
import { GetSubClassDto } from '../models/dtos/subClass/get-sub-class.dto';
import { GetTeamDto } from '../models/dtos/team/get-team.dto';
import { Pnj } from '../models/pnj';
import { Race } from '../models/race';
import { Skill } from '../models/skill';
import { Story } from '../models/story';
import { SubClass } from '../models/subClass';
import { Team } from '../models/team';
import { CharactersService } from './characters.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  capacities;
  characteristics;
  classes;
  pnjList;
  races;
  skills;
  stories;
  subClasses;

  

  constructor(private http:HttpClient, private characterService:CharactersService, private userService:UsersService) {


  }

  setAllDatas(){

    return forkJoin([
      this.http.get(environment.baseApiUrl + "capacity").pipe(map((capacities:GetCapacityDto[])=>capacities.map(element => Capacity.fromDto(element)))),
      this.http.get(environment.baseApiUrl + "characteristic").pipe(map((characteristic:GetCharacteristicDto[])=>characteristic.map(element => Characteristic.fromDto(element)))),
      this.http.get(environment.baseApiUrl + "class").pipe(map((classChar:GetClassDto[])=>classChar.map(element => Class.fromDto(element)))),
      this.http.get(environment.baseApiUrl + "pnj").pipe(map((pnj:GetPnjDto[])=>pnj.map(element => Pnj.fromDto(element)))),
      this.http.get(environment.baseApiUrl + "race").pipe(map((race:GetRaceDto[])=>race.map(element => Race.fromDto(element)))),
      this.http.get(environment.baseApiUrl + "skill").pipe(map((skill:GetSkillDto[])=>skill.map(element => Skill.fromDto(element)))),
      this.http.get(environment.baseApiUrl + "story").pipe(map((story:GetStoryDto[])=>story.map(element => Story.fromDto(element)))),
      this.http.get(environment.baseApiUrl + "sub-class").pipe(map((subClass:GetSubClassDto[])=>subClass.map(element => SubClass.fromDto(element)))),
    ]).pipe(tap(value => {
        this.capacities = value[0]
        this.characteristics = value[1]
        this.classes = value[2]
        this.pnjList = value[3]
        this.races = value[4]
        this.skills = value[5]
        this.stories = value[6]
        this.subClasses = value[7]
    }))
  }

  private setAllCapacities(){

     this.http.get<GetCapacityDto[]>(environment.baseApiUrl + "capacity")
      .pipe(
        tap(value => this.capacities = value)
      )

  }
  private setAllCharacteristics(){

    this.http.get<GetCharacteristicDto[]>(environment.baseApiUrl + "characteristic")
    .pipe(
      tap(value => this.characteristics = value)
    )
    
  }
  private setAllClasses(){

    this.http.get<GetClassDto[]>(environment.baseApiUrl + "class")
    .pipe(
      tap(value => this.classes = value)
    )

  }
  private setAllPnj(){

    this.http.get<GetPnjDto[]>(environment.baseApiUrl + "pnj")
      .pipe(
        tap(value => this.pnjList = value)
      )
          
  }
  private setAllRaces(){

    this.http.get<GetRaceDto[]>(environment.baseApiUrl + "race")
    .pipe(
      tap(value => this.races = value)
    )

  }
  private setAllSkills(){

    this.http.get<GetSkillDto[]>(environment.baseApiUrl + "skill")
    .pipe(
      tap(value => this.skills = value)
    )

  }
  private setAllStories(){

    this.http.get<GetStoryDto[]>(environment.baseApiUrl + "story")
      .pipe(
        tap(value => this.stories = value)
      )

  }
  private setAllSubClasses(){

    this.http.get<GetSubClassDto[]>(environment.baseApiUrl + "subClass")
      .pipe(
        tap(value => this.subClasses = value)
      )

  }
  

}
