import { RaceController } from './race.controller';
import { RaceService } from './race.service';
import { Module } from '@nestjs/common';
import { RaceEntity } from './race.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([RaceEntity])],
    controllers: [
        RaceController,],
    providers: [
        RaceService,],
})
export class RaceModule { }
