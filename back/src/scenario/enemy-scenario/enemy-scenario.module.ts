import { Module } from '@nestjs/common';
import { EnemyScenarioService } from './enemy-scenario.service';
import { EnemyScenarioController } from './enemy-scenario.controller';
import { EnemyScenario } from './entities/enemy-scenario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([EnemyScenario])],
  controllers: [EnemyScenarioController],
  providers: [EnemyScenarioService]
})
export class EnemyScenarioModule {}
