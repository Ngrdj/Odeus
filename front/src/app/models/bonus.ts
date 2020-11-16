import { GetBonusScenarioDto } from './dtos/bonus/get-bonus-scenario.dto';

export class Bonus {

    constructor(

        public label:string

    ){}

    static fromDto(bonusDto:GetBonusScenarioDto):Bonus{

        return new Bonus(
            bonusDto.label
        )
    }
}