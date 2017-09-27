import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewjobpostComponent } from "./newjobpost.component";

const routes: Routes = [
    { path: '', component: NewjobpostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewjobpostRoutingModule { }
