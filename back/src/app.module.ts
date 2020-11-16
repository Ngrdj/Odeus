import { CharacteristicModule } from './characteristic/characteristic.module';
import { ClassModule } from './class/class.module';
import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { RaceModule } from './race/race.module';
import { SkillModule } from './skill/skill.module';
import { SubClassModule } from './sub-class/sub-class.module';
import { CapacityModule } from './capacity/capacity.module';
import { StoryModule } from './story/story.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AuthModule } from './authentication/auth.module';
import {SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { GoogleOauthModule } from './google-oauth/google-oauth.module';
import { PnjModule } from './pnj/pnj.module';
import { TeamModule } from './team/team.module';
import { InitScenarioModule } from './scenario/init-scenario/init-scenario.module';
import { InitScenario } from './scenario/init-scenario/entities/init-scenario.entity';
import { ContextScenarioModule } from './scenario/context-scenario/context-scenario.module';
import { EnemyScenarioModule } from './scenario/enemy-scenario/enemy-scenario.module';
import { AllyScenarioModule } from './scenario/ally-scenario/ally-scenario.module';
import { BonusScenarioModule } from './scenario/bonus-scenario/bonus-scenario.module';
import { TwistScenarioModule } from './scenario/twist-scenario/twist-scenario.module';


@Global()
@Module({
  imports: [
    CharacteristicModule,
    ClassModule,
    AuthModule,
    RaceModule,
    SkillModule,
    SubClassModule,
    CapacityModule,
    StoryModule,
    UserModule,
    TeamModule,
  
    
    
    TypeOrmModule.forRoot({                         //Connection Avec La Base De Données sur Postgres
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'odeus',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,    //Changement auto de la base de donnée
      namingStrategy:new SnakeNamingStrategy(),
      logging:false,
    }),
    GoogleOauthModule,
    PnjModule,
    InitScenarioModule,
    ContextScenarioModule,
    EnemyScenarioModule,
    AllyScenarioModule,
    BonusScenarioModule,
    TwistScenarioModule
    
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
