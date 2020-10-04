import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { Skill } from './entities/skill.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacteristicModule } from 'src/characteristic/characteristic.module';

@Module({
  imports: [TypeOrmModule.forFeature([Skill]),CharacteristicModule],
  controllers: [SkillController],
  providers: [SkillService]
})
export class SkillModule {}
