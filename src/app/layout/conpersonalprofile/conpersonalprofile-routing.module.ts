import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConpersonalprofileComponent } from "./conpersonalprofile.component";

const routes: Routes = [
    { path: '', component: ConpersonalprofileComponent }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConpersonalprofileRoutingModule { }
