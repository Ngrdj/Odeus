import { Module } from '@nestjs/common';
import { TwistScenarioService } from './twist-scenario.service';
import { TwistScenarioController } from './twist-scenario.controller';

@Module({
  controllers: [TwistScenarioController],
  providers: [TwistScenarioService]
})
export class TwistScenarioModule {}
