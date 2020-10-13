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
import { TeamModule } from './team/team.module';
import { StoryModule } from './story/story.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AuthModule } from './authentication/auth.module';
import {SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { GoogleOauthModule } from './google-oauth/google-oauth.module';
import { PnjModule } from './pnj/pnj.module';
import { PnjCharacteristicModule } from './pnj-characteristic/pnj-characteristic.module';
import { PnjSkillModule } from './pnj-skill/pnj-skill.module';

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
    TeamModule,
    StoryModule,
    UserModule,
    CharacterModule,
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
    PnjCharacteristicModule,
    PnjSkillModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
