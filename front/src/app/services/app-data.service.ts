import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GetCapacityDto } from '../models/dtos/capacity/get-capacity.dto';
import { GetCharacteristicDto } from '../models/dtos/characteristic/get-characteristic.dto';
import { GetClassDto } from '../models/dtos/class/get-class.dto';
import { GetPnjDto } from '../models/dtos/pnj/get-pnj.dto';
import { GetRaceDto } from '../models/dtos/race/get-race.dto';
import { GetSkillDto } from '../models/dtos/skill/get-skill.dto';
import { GetStoryDto } from '../models/dtos/story/get-story.dto';
import { GetSubClassDto } from '../models/dtos/subClass/get-sub-class.dto';

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
  

  constructor(private http:HttpClient) {


  }

  setAllDatas(){

    return forkJoin([
      this.http.get(environment.baseApiUrl + "capacity"),
      this.http.get(environment.baseApiUrl + "characteristic"),
      this.http.get(environment.baseApiUrl + "class"),
      this.http.get(environment.baseApiUrl + "pnj"),
      this.http.get(environment.baseApiUrl + "race"),
      this.http.get(environment.baseApiUrl + "skill"),
      this.http.get(environment.baseApiUrl + "story"),
      this.http.get(environment.baseApiUrl + "sub-class"),
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
