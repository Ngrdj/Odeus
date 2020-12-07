import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AlertDialog } from './dialogs/alert/alert.dialog';
import { User } from './models/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  

    constructor(private dialog: MatDialog, private usersService:UsersService,translate: TranslateService){
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
  ngOnInit(): void {

    this.displayAlertMessage()

  }
  displayAlertMessage(){

    const alertMsg = sessionStorage.getItem('alertMsg')
    if(!alertMsg){

      const alertDialog = this.dialog.open(AlertDialog,{

        data:"Attention<br><br>Ce site est un projet en cours, certaines fonctionnalités pourraient ne pas fonctionner correctement."
      
      })
      .afterClosed()
      .subscribe(displayNextTime =>{

        console.log(displayNextTime)

        if(!displayNextTime){

          sessionStorage.setItem("alertMsg",'true')

        }
        

      })

    }

  }

}
