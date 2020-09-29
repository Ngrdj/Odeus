import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop/';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { FightTrackerComponent } from './components/fight-tracker/fight-tracker.component';
import { OptionsBarComponent } from './components/options-bar/options-bar.component';
import { TeamManagerComponent } from './components/team-manager/team-manager.component';
import { SettingsPanelComponent } from './components/settings-panel/settings-panel.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { LoginComponent } from './views/login/login.component';
import { VirtualTableComponent } from './views/virtual-table/virtual-table.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

import { LoginInterceptorProvider } from './interceptors/login.interceptor';

import { ControlPanelDirective } from './directives/control-panel.directive';
import { FormButtonDirective } from './directives/form-button.directive';

import { UserNotLoggedGuard } from './guards/user-not-logged.guard';
import { UserLoggedGuard } from './guards/user-logged.guard';

import { CreateTeamDialog } from './dialogs/create-team.dialog/create-team.dialog.component';



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
    HeaderBarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    ReactiveFormsModule,
    FontAwesomeModule

  ],
  providers: [
    UserNotLoggedGuard,
    UserLoggedGuard,
    LoginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
