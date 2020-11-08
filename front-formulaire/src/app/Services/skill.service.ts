import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetSkillDto } from '../DTOs/get-skill.dto';
import { Skill } from '../Models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(public http:HttpClient) { }

  getAllSkills():Observable<Skill[]>{
    return this.http.get<GetSkillDto[]>(`http://localhost:3000/skill`)
    .pipe(
      map((arraySkill:GetSkillDto[])=> arraySkill
      .map((skill:GetSkillDto)=>  Skill.fromDto(skill)))
    )
  }
}
