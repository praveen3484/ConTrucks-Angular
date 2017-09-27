import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TruckerloginRoutingModule } from "./truckerlogin-routing.module";
import { TruckerloginComponent } from "./truckerlogin.component";

@NgModule({
    imports: [
        CommonModule,
        TruckerloginRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [TruckerloginComponent]
})
export class TruckerloginModule {
}
