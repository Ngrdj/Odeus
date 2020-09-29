import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FightTrackerComponent } from './components/fight-tracker/fight-tracker.component';
import { OptionsBarComponent } from './components/options-bar/options-bar.component';
import { TeamManagerComponent } from './components/team-manager/team-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropModule } from '@angular/cdk/drag-drop/';
import {MatDialogModule} from '@angular/material/dialog'; 
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { FormButtonDirective } from './directives/form-button.directive';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { ControlPanelDirective } from './directives/control-panel.directive';
import { LoginComponent } from './views/login/login.component';
import { UserNotLoggedGuard } from './guards/user-not-logged.guard';
import { UserLoggedGuard } from './guards/user-logged.guard';
import { VirtualTableComponent } from './views/virtual-table/virtual-table.component';
import { LoginInterceptorProvider } from './interceptors/login.interceptor';
import { CreateTeamDialog } from './dialogs/create-team.dialog/create-team.dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    LoginComponent,
    VirtualTableComponent,
    CreateTeamDialog,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    ReactiveFormsModule

  ],
  providers: [
    UserNotLoggedGuard,
    UserLoggedGuard,
    LoginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
