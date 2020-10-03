import { StoryEnum } from "../story.enum";

export class CreateStoryDto {
    name:StoryEnum;
    description:string;
    skills:SkillEnum[]
}