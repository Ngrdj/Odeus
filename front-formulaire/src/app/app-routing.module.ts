import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapacitiesComponent } from './Components/Class-form/capacities/capacities.component';
import { PnjComponent } from './Components/Class-form/Pnj/Pnj.component';
import { HomeComponent } from './Views/home/home.component';


const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'newCapacity',
    component:CapacitiesComponent
  },
  {
    path:'newPnj',
    component:PnjComponent
  },
  {
    path:'**',
    redirectTo:"home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
