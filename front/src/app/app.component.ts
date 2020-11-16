import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from './models/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

    constructor( private usersService:UsersService,translate: TranslateService){
      translate.setDefaultLang('fr');
      translate.use('fr');
      usersService.createUser(new User(

        "Nicolas",
        "Nicolas",
        "admin",
        "grandjean.nicolas@outlook.be"

      )).subscribe()
      usersService.createUser(new User(

        "Jerome",
        "Jerome",
        "admin",
        "grandjean.jerome@outlook.be"

      )).subscribe()

      

    }

}
