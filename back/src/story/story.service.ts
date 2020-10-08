import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillService } from 'src/skill/skill.service';
import { Repository } from 'typeorm';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { Story } from './entities/story.entity';

@Injectable()
export class StoryService {
  constructor(@InjectRepository(Story) private readonly storyRepository:Repository<Story>,private skillService:SkillService){}

  async create(createStoryDto: CreateStoryDto) {
    const story= await this.storyRepository.create({...createStoryDto,skills:[]});
    /*story.name=createStoryDto.name;
    story.description=createStoryDto.description;
    story.skills=[];*/
    for (const skill of createStoryDto.skills) {

      const skillEntity = await this.skillService.findOneByName(skill);
      story.skills.push(skillEntity)
    }
    console.log(story.skills)
    return await this.storyRepository.save(story);
  }

  async findAll() {
    return await this.storyRepository.find();
  }

  async findOne(id: number) {
    return await this.storyRepository.findOne(id);
  }

  async findOneByName(name:string){
    return await this.storyRepository.findOne({name:name})
  }

  update(id: number, updateStoryDto: UpdateStoryDto) {
    return `This action updates a #${id} story`;
  }

  async remove(id: number) {
    const story=await this.findOne(id);
    return this.storyRepository.softRemove(story);
  }

  async delete(id:number){
    const story=await this.findOne(id);
    return this.storyRepository.delete(story);
  }
}
