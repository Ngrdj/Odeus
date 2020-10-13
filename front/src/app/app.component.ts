import { Component } from '@angular/core';
import { User } from './models/user';
import { AppDataService } from './services/app-data.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  capacities:[];
  characteristics:[];
  classes:[];
  pnjList:[];
  races:[];
  skills:[];
  stories:[];
  subClasses:[];

    constructor(private dataService:AppDataService, private usersService:UsersService){

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

      this.dataService.setAllDatas().subscribe(value => console.log(value))
    }

}
