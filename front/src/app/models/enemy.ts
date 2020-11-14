import { GetEnemyScenarioDto } from './dtos/enemy/get-enemy-scenario.dto';

export class Enemy {

    constructor(

        public label:string

    ){}

    static fromDto(enemyDto:GetEnemyScenarioDto):Enemy{

        return new Enemy(
            enemyDto.label
        )
    }
}