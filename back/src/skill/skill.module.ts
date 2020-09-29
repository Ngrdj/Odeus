import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { Module } from '@nestjs/common';
import { SkillEntity } from './skill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([SkillEntity])],
    controllers: [
        SkillController,],
    providers: [
        SkillService,],
})
export class SkillModule { }
