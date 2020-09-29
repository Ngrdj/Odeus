import { ClassCharacterController } from './classCharacter.controller';
import { ClassCharacterService } from './classCharacter.service';
import { Module } from '@nestjs/common';
import { ClassCharacterEntity } from './classCharacter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ClassCharacterEntity])],
    controllers: [
        ClassCharacterController,],
    providers: [
        ClassCharacterService,],
})
export class ClassModule { }
