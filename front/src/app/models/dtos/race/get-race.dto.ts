import { RaceEnum } from '../../enums/race.enum';

export interface GetRaceDto {

    id:number;
    name:RaceEnum;
    strBonus:number;
    dexBonus:number;
    intBonus:number;
    constBonus:number;
    wisBonus:number;
    chaBonus:number;
    
}
