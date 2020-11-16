import { GetStoryDto } from './dtos/story/get-story.dto';
import { StoryEnum } from './enums/story.enum';
import { Skill } from './skill';


export class Story {

    constructor(

        public id:number,
        public name:StoryEnum,
        public description:string,
        public skills:Skill[],


    ){}

    static fromDto(storyDto:GetStoryDto):Story{

        return new Story(

            storyDto.id,
            storyDto.name,
            storyDto.description,
            storyDto.skills.map(skill => Skill.fromDto(skill))

        )

    }

}
