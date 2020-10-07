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
    const story= new Story();
    story.name=createStoryDto.name;
    story.description=createStoryDto.description;
   createStoryDto.skills.forEach(async (skill)=>{
      const skillEntity = await this.skillService.findOneByName(skill);
      story.skills= skillEntity
    })
    console.log(story)
    return await this.storyRepository.save(story);
  }

  findAll() {
    return `This action returns all story`;
  }

  findOne(id: number) {
    return `This action returns a #${id} story`;
  }
  async findOneByName(name:string){
    return await this.storyRepository.findOne({name:name})
  }

  update(id: number, updateStoryDto: UpdateStoryDto) {
    return `This action updates a #${id} story`;
  }

  remove(id: number) {
    return `This action removes a #${id} story`;
  }
}
