import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConjobpostComponent } from "./conjobpost.component";

const routes: Routes = [
    { path: '', component: ConjobpostComponent }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConjobpostRoutingModule { }
