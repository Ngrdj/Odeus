import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FightTrackerComponent } from './components/fight-tracker/fight-tracker.component';
import { OptionsBarComponent } from './components/options-bar/options-bar.component';
import { TeamManagerComponent } from './components/team-manager/team-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    FightTrackerComponent,
    OptionsBarComponent,
    TeamManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
