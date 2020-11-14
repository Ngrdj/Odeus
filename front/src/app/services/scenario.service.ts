import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Ally } from '../models/ally';
import { Bonus } from '../models/bonus';
import { Context } from '../models/context';
import { GetAllyScenarioDto } from '../models/dtos/ally/get-ally-scenario.dto';
import { GetBonusScenarioDto } from '../models/dtos/bonus/get-bonus-scenario.dto';
import { GetContextScenarioDto } from '../models/dtos/context/get-context-scenario.dto';
import { GetEnemyScenarioDto } from '../models/dtos/enemy/get-enemy-scenario.dto';
import { GetInitScenarioDto } from '../models/dtos/init/get-init-scenario.dto copy';
import { GetTwistScenarioDto } from '../models/dtos/twist/get-twist-scenario.dto';
import { Enemy } from '../models/enemy';
import { Init } from '../models/init';
import { Twist } from '../models/twist';

@Injectable({
    providedIn: 'root'
  })
  export class ScenarioService {

    constructor(private http:HttpClient){

        
    }


    getAllInitScenario(){

        return this.http.get(environment.baseApiUrl + 'init')
        .pipe(
            map((initArray:GetInitScenarioDto[])=>initArray.map(element => Init.fromDto(element))))

    }

    getAllAllyScenario(){

        return this.http.get(environment.baseApiUrl + 'init')
        .pipe(
            map((allyArray:GetAllyScenarioDto[])=>allyArray.map(element => Ally.fromDto(element))))

    }

    getAllBonusScenario(){

        return this.http.get(environment.baseApiUrl + 'init')
        .pipe(
            map((bonusArray:GetBonusScenarioDto[])=>bonusArray.map(element => Bonus.fromDto(element))))

    }

    getAllEnemyScenario(){

        return this.http.get(environment.baseApiUrl + 'init')
        .pipe(
            map((enemyArray:GetEnemyScenarioDto[])=>enemyArray.map(element => Enemy.fromDto(element))))

    }

    getAllTwistScenario(){

        return this.http.get(environment.baseApiUrl + 'init')
        .pipe(
            map((twistArray:GetTwistScenarioDto[])=>twistArray.map(element => Twist.fromDto(element))))

    }

    getAllContextScenario(){

        return this.http.get(environment.baseApiUrl + 'init')
        .pipe(
            map((contextArray:GetContextScenarioDto[])=>contextArray.map(element => Context.fromDto(element))))

    }



}
  