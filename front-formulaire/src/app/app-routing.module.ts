import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapacitiesComponent } from './Components/Class-form/capacities/capacities.component';


const routes: Routes = [
  {
    path:'newCapacity',
    component:CapacitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
