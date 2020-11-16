import { Module } from '@nestjs/common';
import { InitScenarioService } from './init-scenario.service';
import { InitScenarioController } from './init-scenario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InitScenario } from './entities/init-scenario.entity';

@Module({
  imports:[TypeOrmModule.forFeature([InitScenario])],
  controllers: [InitScenarioController],
  providers: [InitScenarioService]
})
export class InitScenarioModule {}
