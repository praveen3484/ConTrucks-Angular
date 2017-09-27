import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConpublicprofileComponent } from "./conpublicprofile.component";

const routes: Routes = [
    { path: '', component: ConpublicprofileComponent }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConpublicprofileRoutingModule { }
