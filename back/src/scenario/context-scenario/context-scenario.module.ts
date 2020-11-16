import { Module } from '@nestjs/common';
import { ContextScenarioService } from './context-scenario.service';
import { ContextScenarioController } from './context-scenario.controller';
import { ContextScenario } from './entities/context-scenario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([ContextScenario])],
  controllers: [ContextScenarioController],
  providers: [ContextScenarioService]
})
export class ContextScenarioModule {}
