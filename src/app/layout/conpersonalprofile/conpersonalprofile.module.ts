import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConpersonalprofileComponent } from "./conpersonalprofile.component";
import { ConpersonalprofileRoutingModule } from "./conpersonalprofile-routing.module";

@NgModule({
    imports: [
        CommonModule,
        ConpersonalprofileRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ConpersonalprofileComponent]
})
export class ConpersonalprofileModule {
}
