import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConjobpostRoutingModule } from "./conjobpost-routing.module";
import { ConjobpostComponent } from "./conjobpost.component";

@NgModule({
    imports: [
        CommonModule,
        ConjobpostRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ConjobpostComponent]
})
export class ConjobpostModule {
}
