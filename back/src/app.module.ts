import { TeamModule } from './team/team.module';
import { TeamService } from './team/team.service';
import { TeamController } from './team/team.controller';
import { CharacterCapacitiesModule } from './CharacterCapacities/charactercapacities.module';
import { CharacterCapacitiesService } from './CharacterCapacities/charactercapacities.service';
import { CharacterCapacitiesController } from './CharacterCapacities/charactercapacities.controller';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { RaceModule } from './race/race.module';
import { ClassModule } from './class/classCharacter.module';
import { CharacteristicModule } from './characteristic/characteristic.module';
import { CharacteristicService } from './characteristic/characteristic.service';
import { CharacteristicController } from './characteristic/characteristic.controller';
import { CapacityModule } from './capacity/capacity.module';
import { CharacterModule } from './character/character.module';
import { CharacterController } from './character/character.controller';
import { CharacterService } from './character/character.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
  
    TeamModule,
    CharacterCapacitiesModule,
    UserModule,
    SkillModule,
    RaceModule,
    ClassModule,
    CapacityModule,
    CharacterModule,
    CharacteristicModule,
    TypeOrmModule.forRoot({                         //Connection Avec La Base De Données sur Postgres
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'odeus',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,    //Changement auto de la base de donnée

    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
