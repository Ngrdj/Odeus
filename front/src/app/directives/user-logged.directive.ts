import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { UsersService } from '../services/users.service';

@Directive({
  selector: '[userLogged]'
})
export class UserLoggedDirective {

  constructor(
    private usersService:UsersService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ){
    this.usersService.getCurrentUser().subscribe(currentUser =>{


      if(currentUser){

        this.viewContainer.createEmbeddedView(this.templateRef);

      }else{

        this.viewContainer.clear();

      }

    })

  }
}
