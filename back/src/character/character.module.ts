import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterController } from './character.controller';
import { CharacterEntity } from './character.entity';
import { CharacterService } from './character.service';

@Module({
    imports: [TypeOrmModule.forFeature([CharacterEntity])],
    controllers: [CharacterController],
    providers: [CharacterService],
})
export class CharacterModule {}
