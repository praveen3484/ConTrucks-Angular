import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConrecentfullfilledjobpostsComponent } from "./conrecentfullfilledjobposts.component";

const routes: Routes = [
    { path: '', component: ConrecentfullfilledjobpostsComponent }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConrecentfullfilledjobpostsRoutingModule { }
