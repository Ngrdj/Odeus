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
import { DicePanelComponent } from './components/dice-panel/dice-panel.component';
import { CeilNumberPipe } from './pipes/ceil-number.pipe';
import { SoundPanelComponent } from './components/sound-panel/sound-panel.component';
import { CreateCategoryDialog } from './dialogs/create-category.dialog/create-category.dialog.component'
import { ParentRelativeFontSizeDirective } from './directives/parent-relative-fontSize';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CharacterCommandsDialog } from './dialogs/character-commands.dialog/character-commands.dialog.component';
import { CharacterListItemComponent } from './components/character-list-item/character-list-item.component';
import { DiaryPanelComponent } from './components/diary-panel/diary-panel.component';
import { BestiaryPanelComponent } from './components/bestiary-panel/bestiary-panel.component';
import { RandomScenarioDialogComponent } from './dialogs/random-scenario.dialog/random-scenario.dialog/random-scenario.dialog.component';
import { DeleteBadgeDirective } from './directives/delete-badge.directive';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}

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
    ParentRelativeFontSizeDirective,
    BackgroundPanelComponent,
    DicePanelComponent,
    CeilNumberPipe,
    SoundPanelComponent,
    CreateCategoryDialog,
    CharacterCommandsDialog,
    CharacterListItemComponent,
    DiaryPanelComponent,
    BestiaryPanelComponent,
    RandomScenarioDialogComponent,
    DeleteBadgeDirective,

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    
    TranslateModule.forRoot({
      defaultLanguage:'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
      deps: [HttpClient]
      }
    })

  ],
  providers: [
    UserNotLoggedGuard,
    UserLoggedGuard,
    LoginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
