import { Module } from '@nestjs/common';
import { ContextScenarioService } from './context-scenario.service';
import { ContextScenarioController } from './context-scenario.controller';

@Module({
  controllers: [ContextScenarioController],
  providers: [ContextScenarioService]
})
export class ContextScenarioModule {}
