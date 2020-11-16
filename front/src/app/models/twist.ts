import { GetTwistScenarioDto } from './dtos/twist/get-twist-scenario.dto';

export class Twist {

    constructor(

        public label:string

    ){}

    static fromDto(twistDto:GetTwistScenarioDto):Twist{

        return new Twist(
            twistDto.label
        )
    }
}