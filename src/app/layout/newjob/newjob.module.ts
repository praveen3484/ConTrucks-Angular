import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { NewJobRoutingModule } from "./newjob-routing.module";
import { NewJobComponent } from "./newjob.component";

@NgModule({
    imports: [
        CommonModule,
        NewJobRoutingModule,
        PageHeaderModule
    ],
    declarations: [NewJobComponent]
})
export class NewJobModule { }
