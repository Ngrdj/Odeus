import { GetInitScenarioDto } from './dtos/init/get-init-scenario.dto copy';

export class Init {

    constructor(

        public label:string

    ){}

    static fromDto(initDto:GetInitScenarioDto):Init{

        return new Init(
            initDto.label
        )
    }
}