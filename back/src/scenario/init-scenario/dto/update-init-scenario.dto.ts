import { PartialType } from '@nestjs/mapped-types';
import { CreateInitScenarioDto } from './create-init-scenario.dto';

export class UpdateInitScenarioDto extends PartialType(CreateInitScenarioDto) {}