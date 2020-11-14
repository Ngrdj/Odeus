import { PartialType } from '@nestjs/mapped-types';
import { CreateBonusScenarioDto } from './create-bonus-scenario.dto';

export class UpdateBonusScenarioDto extends PartialType(CreateBonusScenarioDto) {}