import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConrecentfullfilledjobpostsRoutingModule } from "./conrecentfullfilledjobposts-routing.module";
import { ConrecentfullfilledjobpostsComponent } from "./conrecentfullfilledjobposts.component";

@NgModule({
    imports: [
        CommonModule,
        ConrecentfullfilledjobpostsRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ConrecentfullfilledjobpostsComponent]
})
export class ConrecentfullfilledjobpostsModule {
}
