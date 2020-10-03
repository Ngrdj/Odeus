import { Module } from '@nestjs/common';
import { CharacterSubClassService } from './character-sub-class.service';
import { CharacterSubClassController } from './character-sub-class.controller';
import { CharacterSubClass } from './entities/character-sub-class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterSubClass])],
  controllers: [CharacterSubClassController],
  providers: [CharacterSubClassService]
})
export class CharacterSubClassModule {}
