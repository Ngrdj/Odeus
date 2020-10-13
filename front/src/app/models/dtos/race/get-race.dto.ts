import { GetCharacterDto } from '../character/get-character.dto';

export interface GetRaceDto {

    id:number;
    name:string;
    strBonus:number;
    dexBonus:number;
    intBonus:number;
    constBonus:number;
    wisBonus:number;
    chaBonus:number;
    characters:GetCharacterDto[];
    
}
