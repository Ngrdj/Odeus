import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RolesEnum } from '../models/enums/roles.enum';
import { UsersService } from '../services/users.service';

@Directive({
  selector: '[userRole]'
})
export class UserRoleDirective {

  private hasView = false;

  constructor(
    private usersService:UsersService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ){}

  @Input() set userRole(role: RolesEnum) {
    
    this.usersService.getCurrentUser().subscribe(currentUser =>{

      if (!(currentUser.role === role) && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if ((currentUser.role === role) && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }

    })

  }

}
