import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConrecentjobpostsRoutingModule } from "./conrecentjobposts-routing.module";
import { ConrecentjobpostsComponent } from "./conrecentjobposts.component";

@NgModule({
    imports: [
        CommonModule,
        ConrecentjobpostsRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ConrecentjobpostsComponent]
})
export class ConrecentjobpostsModule {
}
