import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';
import { Story } from './entities/story.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillModule } from 'src/skill/skill.module';

@Module({
  imports: [TypeOrmModule.forFeature([Story]),SkillModule],
  controllers: [StoryController],
  providers: [StoryService],
  exports: [StoryService]
})
export class StoryModule {}
