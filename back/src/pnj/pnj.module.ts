import { Module } from '@nestjs/common';
import { PnjService } from './pnj.service';
import { PnjController } from './pnj.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pnj } from './entities/pnj.entity';
import { PnjCharacteristic } from 'src/pnj-characteristic/entities/pnj-characteristic.entity';
import { PnjSkill } from 'src/pnj-skill/entities/pnj-skill.entity';
import { PnjCharacteristicService } from 'src/pnj-characteristic/pnj-characteristic.service';
import { PnjSkillService } from 'src/pnj-skill/pnj-skill.service';
import { CharacteristicModule } from 'src/characteristic/characteristic.module';
import { SkillModule } from 'src/skill/skill.module';

@Module({
  imports:[TypeOrmModule.forFeature([Pnj,PnjCharacteristic,PnjSkill]),CharacteristicModule,SkillModule],
  controllers: [PnjController],
  providers: [PnjService,PnjCharacteristicService,PnjSkillService],
  exports:[PnjService]
})
export class PnjModule {}
