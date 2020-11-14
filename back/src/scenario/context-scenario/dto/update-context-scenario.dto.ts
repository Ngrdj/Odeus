import { PartialType } from '@nestjs/mapped-types';
import { CreateContextScenarioDto } from './create-context-scenario.dto';

export class UpdateContextScenarioDto extends PartialType(CreateContextScenarioDto) {}