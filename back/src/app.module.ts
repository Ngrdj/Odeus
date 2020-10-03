import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { RaceModule } from './race/race.module';
import { ClassModule } from './class/class.module';
import { SkillModule } from './skill/skill.module';
import { SubClassModule } from './sub-class/sub-class.module';
import { CapacityModule } from './capacity/capacity.module';
import { CharacterSubClassModule } from './character-sub-class/character-sub-class.module';
import { CharacterClassModule } from './character-class/character-class.module';
import { CharacterSkillModule } from './character-skill/character-skill.module';
import { TeamCharacterModule } from './team-character/team-character.module';
import { TeamModule } from './team/team.module';
import { CharacteristicModule } from './characteristic/characteristic.module';
import { CharacterCharacteristicModule } from './character-characteristic/character-characteristic.module';
import { StoryModule } from './story/story.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [
            AuthModule,
            CharacterModule,
            RaceModule,
            ClassModule,
            SkillModule,
            SubClassModule,
            CapacityModule, 
            CharacterSubClassModule, 
            CharacterClassModule, 
            CharacterSkillModule, 
            TeamCharacterModule, 
            TeamModule, 
            CharacteristicModule, 
            CharacterCharacteristicModule, 
            StoryModule, 
            UserModule,
            TypeOrmModule.forRoot({                         //Connection Avec La Base De Données sur Postgres
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: 'admin',
              database: 'odeus',
              entities: ["dist/**/*.entity{.ts,.js}"],
              synchronize: true,    //Changement auto de la base de donnée
        
            })
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
