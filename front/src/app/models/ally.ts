import { GetAllyScenarioDto } from './dtos/ally/get-ally-scenario.dto';

export class Ally {

    constructor(

        public label:string

    ){}

    static fromDto(allyDto:GetAllyScenarioDto):Ally{

        return new Ally(
            allyDto.label
        )
    }
}