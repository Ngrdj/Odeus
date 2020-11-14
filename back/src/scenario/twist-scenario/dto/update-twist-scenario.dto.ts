import { PartialType } from '@nestjs/mapped-types';
import { CreateTwistScenarioDto } from './create-twist-scenario.dto';

export class UpdateTwistScenarioDto extends PartialType(CreateTwistScenarioDto) {}