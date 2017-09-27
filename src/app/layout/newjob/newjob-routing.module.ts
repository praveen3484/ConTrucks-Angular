import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewJobComponent } from "./newjob.component";


const routes: Routes = [
    { path: '', component: NewJobComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewJobRoutingModule { }
