import { Character } from './character';

export class Team {

    constructor(public name:string,
                public members:Character[]){}

    public getUniqueMembers():Character[]{

        return this.members.filter((element, index) => {
            const _element = JSON.stringify(element);
            return index === this.members.findIndex(obj => {
              return JSON.stringify(obj) === _element;
            });
        });
    
    }

}
