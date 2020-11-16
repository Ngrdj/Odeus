import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { UsersService } from '../services/users.service';

@Directive({
  selector: '[userNotLogged]'
})
export class UserNotLoggedDirective {

  constructor(
    private usersService:UsersService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ){
    this.usersService.getCurrentUser().subscribe(currentUser =>{

      if(currentUser===null){

        this.viewContainer.createEmbeddedView(this.templateRef);

      }else{

        this.viewContainer.clear();

      }

    })

  }
}
