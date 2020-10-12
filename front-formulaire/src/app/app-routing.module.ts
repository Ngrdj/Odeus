import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapacitiesComponent } from './Components/Class-form/capacities/capacities.component';
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
    path:'**',
    redirectTo:"home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
