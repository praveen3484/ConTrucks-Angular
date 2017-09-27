import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SeecurrentjobsRoutingModule } from "./seecurrentjobs-routing.module";
import { SeecurrentjobsComponent } from "./seecurrentjobs.component";

@NgModule({
    imports: [
        CommonModule,
        SeecurrentjobsRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [SeecurrentjobsComponent]
})
export class SeecurrentjobsModule {
}
