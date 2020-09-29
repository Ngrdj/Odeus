import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { Module } from '@nestjs/common';
import { ClassEntity } from './class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ClassEntity])],
    controllers: [
        ClassController,],
    providers: [
        ClassService,],
})
export class ClassModule { }
