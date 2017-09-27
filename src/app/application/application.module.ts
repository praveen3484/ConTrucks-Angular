import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from "./application-routing.module";
import { ApplicationComponent } from "./application.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
    imports: [
        CommonModule,
         ApplicationRoutingModule,
         FormsModule,
         ReactiveFormsModule
    ],
    declarations: [
        ApplicationComponent
    ]
})
export class ApplicationModule { }