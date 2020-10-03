import { Module } from '@nestjs/common';
import { CharacterClassService } from './character-class.service';
import { CharacterClassController } from './character-class.controller';
import { CharacterClass } from './entities/character-class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterClass])],
  controllers: [CharacterClassController],
  providers: [CharacterClassService]
})
export class CharacterClassModule {}
