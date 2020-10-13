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
import { RegisterComponent } from './views/register/register.component';
import { FtFighterComponent } from './components/ft-fighter/ft-fighter.component';
import { FtInfoBoxComponent } from './components/ft-info-box/ft-info-box.component';
import { MyCharactersPanelComponent } from './components/my-characters-panel/my-characters-panel.component';
import { UserRoleDirective } from './directives/user-role.directive';
import { CreateCharacterComponent } from './dialogs/create-character.dialog/create-character.dialog.component';
import { UserNotLoggedDirective } from './directives/user-not-logged.directive';
import { UserLoggedDirective } from './directives/user-logged.directive';
import { BackgroundPanelComponent } from './components/background-panel/background-panel.component';




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
    RegisterComponent,
    FtFighterComponent,
    FtInfoBoxComponent,
    MyCharactersPanelComponent,
    UserRoleDirective,
    CreateCharacterComponent,
    UserNotLoggedDirective,
    UserLoggedDirective,
    BackgroundPanelComponent,
    
    
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
