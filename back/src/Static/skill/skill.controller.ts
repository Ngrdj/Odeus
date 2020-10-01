import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SkillDto } from './skill-dto';
import { SkillEntity } from './skill.entity';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
    constructor(private readonly skillService:SkillService){

    }

    @Get()
    async getAllSkill():Promise<SkillEntity[]>{
        return await this.skillService.getAllSkills();
    }

    @Get('/:id')
    async getSkillById(@Param('id',ParseIntPipe)id:number):Promise<SkillEntity>{
        return this.skillService.getSkillById(id)
    }

    @UsePipes(new ValidationPipe({transform:true}))
    @Post()
    async postSkill(@Body()newSkill:SkillDto):Promise<SkillEntity>{
        return await this.skillService.createSkill(newSkill);
    }

    @Delete()
    async deleteSkill(@Param('id',ParseIntPipe)id:number){
        await this.skillService.softDeleteSkill(id)
    }
 }
