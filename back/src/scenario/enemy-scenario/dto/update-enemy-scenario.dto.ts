import { PartialType } from '@nestjs/mapped-types';
import { CreateEnemyScenarioDto } from './create-enemy-scenario.dto';

export class UpdateEnemyScenarioDto extends PartialType(CreateEnemyScenarioDto) {}