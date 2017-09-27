import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeecurrentjobsComponent } from "./seecurrentjobs.component";

const routes: Routes = [
    { path: '', component: SeecurrentjobsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeecurrentjobsRoutingModule { }
