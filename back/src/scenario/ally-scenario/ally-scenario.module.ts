import { Module } from '@nestjs/common';
import { AllyScenarioService } from './ally-scenario.service';
import { AllyScenarioController } from './ally-scenario.controller';

@Module({
  controllers: [AllyScenarioController],
  providers: [AllyScenarioService]
})
export class AllyScenarioModule {}
