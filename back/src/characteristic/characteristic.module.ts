import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacteristicController } from './characteristic.controller';
import { CharacteristicService } from './characteristic.service';
import { Characteristic } from './entities/characteristic.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Characteristic])],
    controllers: [CharacteristicController],
    providers: [CharacteristicService],
    exports:[CharacteristicService]
})
export class CharacteristicModule {}
