import { Module } from '@nestjs/common';
import { BonusScenarioService } from './bonus-scenario.service';
import { BonusScenarioController } from './bonus-scenario.controller';
import { BonusScenario } from './entities/bonus-scenario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([BonusScenario])],
  controllers: [BonusScenarioController],
  providers: [BonusScenarioService]
})
export class BonusScenarioModule {}
