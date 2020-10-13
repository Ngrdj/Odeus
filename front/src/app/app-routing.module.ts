import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserNotLoggedGuard } from './guards/user-not-logged.guard';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { VirtualTableComponent } from './views/virtual-table/virtual-table.component';


const routes: Routes = [

  {path:"", component:VirtualTableComponent},
  {path:"login", component:LoginComponent,canActivate:[UserNotLoggedGuard]},
  {path:"register", component:RegisterComponent,canActivate:[UserNotLoggedGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
