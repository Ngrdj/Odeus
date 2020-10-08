import { Component } from '@angular/core';
import { User } from './models/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
    constructor(private usersService:UsersService){

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
