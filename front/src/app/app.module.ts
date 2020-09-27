import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FightTrackerComponent } from './components/fight-tracker/fight-tracker.component';
import { OptionsBarComponent } from './components/options-bar/options-bar.component';
import { TeamManagerComponent } from './components/team-manager/team-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {DragDropModule} from '@angular/cdk/drag-drop/';
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { FormButtonDirective } from './directives/form-button.directive';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { ControlPanelDirective } from './directives/control-panel.directive';


@NgModule({
  declarations: [
    AppComponent,
    FightTrackerComponent,
    OptionsBarComponent,
    TeamManagerComponent,
    SettingsPanelComponent,
    FormButtonDirective,
    CharacterDetailsComponent,
    ControlPanelDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
