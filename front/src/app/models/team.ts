import { Character } from './character';
import { GetTeamDto } from './dtos/team/get-team.dto';
import { Pj } from './pj';
import { Pnj } from './pnj';
import { User } from './user';

export class Team {

    constructor(
                public name:string,
                public members:Character[]
                ){}

    public getUniqueMembers():Character[]{

        return this.members.filter((element, index) => {
            const _element = JSON.stringify(element);
            return index === this.members.findIndex(obj => {
              return JSON.stringify(obj) === _element;
            });
        });
    
    }
    static fromDto(teamDto:GetTeamDto):Team{
        const membersPj=teamDto.characters.map(pj => Pj.fromDto(pj));
        const membersPnj=teamDto.pnjs.map(pnj => Pnj.fromDto(pnj));
        const members=[];
        membersPj.forEach((pj)=>{ members.push(pj)})
        membersPnj.forEach((pnj)=>{members.push(pnj)})


        return new Team(
            teamDto.name,
            members
        )
    }

}
