import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvailablejobsComponent } from "./availablejobs.component";


const routes: Routes = [
    { path: '', component: AvailablejobsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  AvailablejobsRoutingModule { }
