import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { CapacitiesComponent } from './Components/Class-form/capacities/capacities.component';
import { CharacterFormComponent } from './Components/Class-form/character-form/character-form.component';
import { CharacteristicsComponent } from './Components/Class-form/characteristics/characteristics.component';
import { ClassFormComponent } from './Components/Class-form/class-form/Class-form.component';
import { RaceFormComponent } from './Components/Class-form/race-form/race-form.component';
import { SkillFormComponent } from './Components/Class-form/skill-form/skill-form.component';
import { PnjComponent } from './Components/Class-form/Pnj/Pnj.component';
import { CreateCategory } from './create-category.dialog/create-category.dialog/create-category.dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CapacitiesComponent,
    CharacterFormComponent,
    CharacteristicsComponent,
    ClassFormComponent,
    RaceFormComponent,
    SkillFormComponent,
    PnjComponent,
    CreateCategory.DialogComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
