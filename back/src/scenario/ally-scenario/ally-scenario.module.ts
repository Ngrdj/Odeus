import { Module } from '@nestjs/common';
import { AllyScenarioService } from './ally-scenario.service';
import { AllyScenarioController } from './ally-scenario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllyScenario } from './entities/ally-scenario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AllyScenario])],
  controllers: [AllyScenarioController],
  providers: [AllyScenarioService]
})
export class AllyScenarioModule {}
