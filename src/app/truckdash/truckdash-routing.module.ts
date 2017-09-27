import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckdashComponent } from "./truckdash.component";

const routes: Routes = [
    { path: '', component: TruckdashComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckdashRoutingModule { }
