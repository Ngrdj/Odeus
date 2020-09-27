import { CharacterModule } from './character/character.module';
import { CharacterController } from './character/character.controller';
import { CharacterService } from './character/character.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
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
  
    })],
  controllers: [
    CharacterController, AppController],
  providers: [
    CharacterService, AppService],
})
export class AppModule { }
