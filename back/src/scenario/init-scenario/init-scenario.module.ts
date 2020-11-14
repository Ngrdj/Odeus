import { Module } from '@nestjs/common';
import { InitScenarioService } from './init-scenario.service';
import { InitScenarioController } from './init-scenario.controller';

@Module({
  controllers: [InitScenarioController],
  providers: [InitScenarioService]
})
export class InitScenarioModule {}
