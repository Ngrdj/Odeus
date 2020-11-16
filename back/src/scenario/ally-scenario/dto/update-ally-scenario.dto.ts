import { PartialType } from '@nestjs/mapped-types';
import { CreateAllyScenarioDto } from './create-ally-scenario.dto';

export class UpdateAllyScenarioDto extends PartialType(CreateAllyScenarioDto) {}