import { Module } from '@nestjs/common';
import { BonusScenarioService } from './bonus-scenario.service';
import { BonusScenarioController } from './bonus-scenario.controller';

@Module({
  controllers: [BonusScenarioController],
  providers: [BonusScenarioService]
})
export class BonusScenarioModule {}
