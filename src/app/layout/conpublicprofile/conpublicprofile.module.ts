import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConpublicprofileRoutingModule } from "./conpublicprofile-routing.module";
import { ConpublicprofileComponent } from "./conpublicprofile.component";

@NgModule({
    imports: [
        CommonModule,
        ConpublicprofileRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ConpublicprofileComponent]
})
export class ConpublicprofileModule {
}
