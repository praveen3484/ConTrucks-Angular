import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConrecentjobpostsComponent } from "./conrecentjobposts.component";

const routes: Routes = [
    { path: '', component: ConrecentjobpostsComponent }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConrecentjobpostsRoutingModule { }
