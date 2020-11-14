import { GetContextScenarioDto } from './dtos/context/get-context-scenario.dto';

export class Context {

    constructor(

        public label:string

    ){}

    static fromDto(contextDto:GetContextScenarioDto):Context{

        return new Context(
            contextDto.label
        )
    }
}