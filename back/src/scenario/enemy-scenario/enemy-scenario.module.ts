import { Module } from '@nestjs/common';
import { EnemyScenarioService } from './enemy-scenario.service';
import { EnemyScenarioController } from './enemy-scenario.controller';

@Module({
  controllers: [EnemyScenarioController],
  providers: [EnemyScenarioService]
})
export class EnemyScenarioModule {}
