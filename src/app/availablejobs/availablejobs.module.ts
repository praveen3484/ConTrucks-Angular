import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailablejobsComponent } from "./availablejobs.component";
import { AvailablejobsRoutingModule } from "./availablejobs-routing.module";
@NgModule({
    imports: [
        CommonModule,
         AvailablejobsRoutingModule,
    ],
    declarations: [
        AvailablejobsComponent
    ]
})
export class AvailablejobsModule { }