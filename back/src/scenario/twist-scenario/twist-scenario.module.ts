import { Module } from '@nestjs/common';
import { TwistScenarioService } from './twist-scenario.service';
import { TwistScenarioController } from './twist-scenario.controller';
import { TwistScenario } from './entities/twist-scenario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([TwistScenario])],
  controllers: [TwistScenarioController],
  providers: [TwistScenarioService]
})
export class TwistScenarioModule {}
