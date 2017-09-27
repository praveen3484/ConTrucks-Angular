import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckersignupComponent } from './truckersignup.component';

const routes: Routes = [
    { path: '', component: TruckersignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckersignupRoutingModule { }
