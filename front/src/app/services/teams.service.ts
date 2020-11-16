import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GetTeamDto } from '../models/dtos/team/get-team.dto';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient) { }


  getTeamsByUser():Observable<Team[]>{
    return this.http.get<GetTeamDto[]>(environment.baseApiUrl + 'team')
    .pipe(
      
      map((teams:GetTeamDto[])=>{

        return teams.map((team:GetTeamDto)=>{

          return Team.fromDto(team)
        })
      })
    )
  }

}
