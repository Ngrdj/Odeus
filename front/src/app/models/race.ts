import { GetRaceDto } from './dtos/race/get-race.dto';
import { RaceEnum } from './enums/race.enum';

export class Race {

    constructor(

        public id:number,
        public name:RaceEnum,
        public strBonus:number,
        public dexBonus:number,
        public intBonus:number,
        public constBonus:number,
        public wisBonus:number,
        public chaBonus:number,

    ){}

    static fromDto(raceDto:GetRaceDto):Race{

        return new Race(

            raceDto.id,
            raceDto.name,
            raceDto.strBonus,
            raceDto.dexBonus,
            raceDto.intBonus,
            raceDto.constBonus,
            raceDto.wisBonus,
            raceDto.chaBonus

        )

    }

}
