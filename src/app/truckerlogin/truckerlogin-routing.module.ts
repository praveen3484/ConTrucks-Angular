import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TruckerloginComponent } from "./truckerlogin.component";

const routes: Routes = [
    { path: '', component: TruckerloginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckerloginRoutingModule { }
